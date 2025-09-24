import { createFileRoute } from '@tanstack/react-router';
import { useI18n } from '../i18n';
import { ContentRenderer } from '@/components/content-renderer';

export const Route = createFileRoute('/about')({
  component: About,
});

function About() {
  const { copy } = useI18n();

  return (
    <div className="p-2">
      <div className="flex flex-col items-center gap-8">
        <h1 className="py-8 text-2xl font-bold">{copy.pages.about.title}</h1>
        {copy.pages.about.blocks.map(block => (
          <ContentRenderer block={block} key={block.id} />
        ))}
      </div>
    </div>
  );
}
