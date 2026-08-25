import { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ChatMessageContent } from './ChatMessageContent';
import './ChatWidget.css';

const MAX_HISTORY = 10;

function parseSseChunk(line, onDelta) {
  if (!line.startsWith('data: ')) return;
  const data = line.slice(6).trim();
  if (data === '[DONE]') return;

  try {
    const parsed = JSON.parse(data);
    const delta = parsed.choices?.[0]?.delta?.content;
    if (delta) onDelta(delta);
  } catch {
    // skip malformed chunks
  }
}

const ChatWidget = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'assistant', content: t('chat.welcome') }]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const scrollContainerRef = useRef(null);
  const panelRef = useRef(null);
  const inputRef = useRef(null);
  const abortRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      const container = scrollContainerRef.current;
      if (container) container.scrollTop = container.scrollHeight;
    });
  }, []);

  useEffect(() => {
    if (open) scrollToBottom();
  }, [messages, streaming, open, scrollToBottom]);

  const welcomeMessage = t('chat.welcome');

  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0]?.role === 'assistant') {
        return [{ role: 'assistant', content: welcomeMessage }];
      }
      return prev;
    });
  }, [welcomeMessage]);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e) => {
      if (panelRef.current?.contains(e.target)) return;
      if (e.target.closest('.chat-fab')) return;
      setOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const sendMessage = useCallback(async () => {
    const trimmed = input.trim();
    if (!trimmed || streaming) return;

    const userMessage = { role: 'user', content: trimmed };
    const history = [...messages, userMessage].slice(-MAX_HISTORY);
    setMessages(history);
    setInput('');
    setStreaming(true);

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    let assistantContent = '';

    const appendDelta = (delta) => {
      assistantContent += delta;
      setMessages((prev) => {
        const next = [...prev];
        const last = next[next.length - 1];
        if (last?.role === 'assistant') {
          next[next.length - 1] = { role: 'assistant', content: assistantContent };
        }
        return next;
      });
    };

    try {
      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

      const response = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: history.map(({ role, content }) => ({ role, content })),
        }),
        signal: controller.signal,
      });

      if (!response.ok) throw new Error('Request failed');

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No stream');

      const decoder = new TextDecoder();
      let buffer = '';

      // eslint-disable-next-line no-constant-condition
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() ?? '';

        for (const line of lines) {
          parseSseChunk(line, appendDelta);
        }
      }

      if (buffer) parseSseChunk(buffer, appendDelta);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setMessages((prev) => {
          const withoutEmpty = prev.filter(
            (m, i) => !(i === prev.length - 1 && m.role === 'assistant' && m.content === '')
          );
          return [...withoutEmpty, { role: 'assistant', content: t('chat.error') }];
        });
      }
    } finally {
      setStreaming(false);
      inputRef.current?.focus();
      scrollToBottom();
    }
  }, [input, streaming, messages, t, scrollToBottom]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {open && (
        <div ref={panelRef} className="chat-panel">
          <div className="chat-panel__header">
            <div>
              <p className="chat-panel__title">{t('chat.title')}</p>
              <p className="chat-panel__subtitle">{t('chat.subtitle')}</p>
            </div>
            <button type="button" className="chat-panel__close" onClick={() => setOpen(false)} aria-label={t('chat.close')}>
              <X size={20} />
            </button>
          </div>

          <div ref={scrollContainerRef} className="chat-panel__messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-bubble chat-bubble--${msg.role}`}>
                {msg.role === 'assistant' ? (
                  <ChatMessageContent content={msg.content} streaming={streaming && i === messages.length - 1} />
                ) : (
                  msg.content
                )}
              </div>
            ))}
          </div>

          <div className="chat-panel__input-area">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t('chat.placeholder')}
              rows={1}
              disabled={streaming}
            />
            <button
              type="button"
              onClick={sendMessage}
              disabled={streaming || !input.trim()}
              aria-label={t('chat.send')}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        className={`chat-fab ${open ? 'chat-fab--open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? t('chat.close') : t('chat.open')}
        aria-expanded={open}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </>
  );
};

export default ChatWidget;
