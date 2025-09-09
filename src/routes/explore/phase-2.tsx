import { createFileRoute, Link } from '@tanstack/react-router';
import { useI18n } from '../../i18n';
import { ContentRenderer } from '@/components/content-renderer';

import mapBg from '../../assets/kik-map-bg.jpg';
import map2 from '../../assets/kik-map-2.png';
import { Button } from '@/components/ui/button';
import { ArrowLeftCircle } from 'lucide-react';

export const Route = createFileRoute('/explore/phase-2')({
  component: Phase2,
});

function Phase2() {
  const { copy } = useI18n();

  return (
    <>
      <div className="absolute top-25 right-10 z-10 flex w-1/4 flex-col gap-4 p-8">
        <div className="bg-background/50 flex flex-col items-center gap-8 rounded-2xl p-4 text-right">
          <h1 className="text-foreground py-4 text-4xl font-bold">{copy.pages.phase2.title}</h1>
          <div className="text-foreground">
            {copy.pages.phase2.blocks.map(block => (
              <ContentRenderer block={block} />
            ))}
          </div>
        </div>
        <div className="flex w-full items-center justify-center gap-3 text-right">
          <Button size={'icon'} variant={'secondary'} asChild>
            <Link to="/explore">
              <ArrowLeftCircle className="h-12 w-12" />
            </Link>
          </Button>
          <Button size={'lg'} variant={'outline'} asChild>
            <Link to="/explore/phase-1">{copy.nav.phase1}</Link>
          </Button>
        </div>
      </div>
      <img
        src={map2}
        alt="phase 2 map"
        className="absolute top-0 left-0 z-1 h-full w-full object-cover"
      />
      <img
        src={mapBg}
        alt="map background"
        className="absolute top-0 left-0 z-0 h-full w-full object-cover opacity-50 dark:opacity-25"
      />
    </>
  );
}
