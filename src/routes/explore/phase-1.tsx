import { createFileRoute, Link } from '@tanstack/react-router';
import { useI18n } from '../../i18n';
import { ContentRenderer } from '@/components/content-renderer';

import mapBg from '../../assets/kik-map-bg.jpg';
import map1 from '../../assets/kik-map-1.png';
import { Button } from '@/components/ui/button';
import { ArrowLeftCircle } from 'lucide-react';

export const Route = createFileRoute('/explore/phase-1')({
  component: Phase1,
});

function Phase1() {
  const { copy } = useI18n();

  return (
    <>
      <div className="absolute top-25 right-10 z-10 flex w-1/4 flex-col gap-4 p-8">
        <div className="bg-foreground/10 flex flex-col items-center gap-8 rounded-2xl p-4 text-right text-white">
          <h1 className="py-4 text-4xl font-bold">{copy.pages.phase1.title}</h1>
          <div className="text-white">
            {copy.pages.phase1.blocks.map(block => (
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
            <Link to="/explore/phase-2">{copy.nav.phase2}</Link>
          </Button>
        </div>
      </div>
      <img
        src={map1}
        alt="phase 1 map"
        className="absolute top-0 left-0 z-1 h-full w-full object-cover"
      />
      <img
        src={mapBg}
        alt="map background"
        className="absolute top-0 left-0 z-0 h-full w-full object-cover opacity-25"
      />
    </>
  );
}
