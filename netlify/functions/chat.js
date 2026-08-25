import { stream } from '@netlify/functions';
import { Readable } from 'node:stream';
import { SITE_TITLE, SITE_URL } from '../../src/constants/site.js';
import { KNOWLEDGE_JSON } from '../../src/generated/knowledge.js';

const SYSTEM_PROMPT = `You are the AI assistant on Rubén Ruzafa's personal website.

STRICT RULES:
1. ONLY answer questions about Rubén Ruzafa, his coaching services, sporting career, and contact information covered in the KNOWLEDGE BASE below.
2. If a question is NOT about Rubén or his services, refuse politely. Do NOT use general training knowledge for unrelated topics.
3. If information is not in the knowledge base, say you don't know. Never invent prices or availability.
4. Rubén is a RETIRED professional athlete. He is now a personal trainer. Use past tense for his competition career.
5. Keep answers concise and friendly. Match the user's language (Spanish or English).
6. Use plain text only. No markdown or bullet symbols.

When refusing off-topic questions:
- Spanish: "Solo puedo ayudarte con preguntas sobre Rubén Ruzafa y sus servicios de entrenamiento. ¿Hay algo sobre sus servicios o trayectoria que te gustaría saber?"
- English: "I can only help with questions about Rubén Ruzafa and his training services. Is there anything about his services or career you'd like to know?"

KNOWLEDGE BASE:
`;

const rateLimitMap = new Map();
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 60_000;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

function getJsonStream(body) {
  return Readable.from(Buffer.from(JSON.stringify(body)));
}

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };
}

export const handler = stream(async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders() };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
      body: getJsonStream({ error: 'Method not allowed' }),
    };
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 503,
      headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
      body: getJsonStream({ error: 'Chat service not configured' }),
    };
  }

  const ip =
    event.headers['x-forwarded-for']?.split(',')[0]?.trim() ??
    event.headers['client-ip'] ??
    'unknown';

  if (isRateLimited(ip)) {
    return {
      statusCode: 429,
      headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
      body: getJsonStream({ error: 'Too many requests' }),
    };
  }

  try {
    const body = JSON.parse(event.body ?? '{}');
    const userMessages = (body.messages ?? []).slice(-10);

    const model =
      process.env.OPENROUTER_MODEL ?? 'meta-llama/llama-3.3-70b-instruct:free';

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': process.env.URL ?? SITE_URL,
        'X-Title': SITE_TITLE,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT + KNOWLEDGE_JSON },
          ...userMessages,
        ],
        stream: true,
        max_tokens: 1024,
        temperature: 0.2,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenRouter error:', errorText);
      return {
        statusCode: 502,
        headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
        body: getJsonStream({ error: 'Upstream error' }),
      };
    }

    if (!response.body) {
      return {
        statusCode: 502,
        headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
        body: getJsonStream({ error: 'No stream body' }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        ...corsHeaders(),
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
      body: response.body,
    };
  } catch (err) {
    console.error('Chat handler error:', err);
    return {
      statusCode: 500,
      headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
      body: getJsonStream({ error: 'Internal server error' }),
    };
  }
});
