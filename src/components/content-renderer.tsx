import type { ContentBlock } from '../i18n/types';
import { Button } from './ui/button';

export function ContentRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'text':
      return <p>{block.content}</p>;
    case 'image':
      return <img src={block.src} alt={block.alt} />;
    case 'quote':
      return (
        <blockquote>
          <p>{block.text}</p>
          <footer>{block.author}</footer>
        </blockquote>
      );
    case 'button':
      return <Button onClick={() => (window.location.href = block.link)}>{block.label}</Button>;
    default:
      return null;
  }
}
