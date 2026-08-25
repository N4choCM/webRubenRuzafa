/* eslint-disable react/prop-types */
function parseInline(text) {
  const parts = [];
  const regex = /\*\*([^*]+)\*\*/g;
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    parts.push(<strong key={key++}>{match[1]}</strong>);
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

function formatBlocks(content) {
  const lines = content.split('\n');
  const blocks = [];
  let listItems = [];
  let key = 0;

  const flushList = () => {
    if (listItems.length === 0) return;
    blocks.push(
      <ul key={key++}>
        {listItems.map((item, i) => (
          <li key={i}>{parseInline(item)}</li>
        ))}
      </ul>
    );
    listItems = [];
  };

  for (const line of lines) {
    const bulletMatch = line.match(/^[-*•]\s+(.*)/);
    if (bulletMatch) {
      listItems.push(bulletMatch[1]);
      continue;
    }

    flushList();
    if (line.trim() === '') continue;

    blocks.push(<p key={key++}>{parseInline(line)}</p>);
  }

  flushList();
  return blocks;
}

function TypingDots() {
  return (
    <span className="typing-dots" aria-hidden>
      {[0, 1, 2].map((i) => (
        <span key={i} className="typing-dots__dot" style={{ animationDelay: `${i * 0.2}s` }} />
      ))}
    </span>
  );
}

export function ChatMessageContent({ content, streaming }) {
  if (!content && streaming) return <TypingDots />;

  const blocks = formatBlocks(content);
  return <>{blocks.length > 0 ? blocks : content}</>;
}
