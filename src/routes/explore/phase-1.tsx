import { createFileRoute, Link } from '@tanstack/react-router';
import { useI18n } from '../../i18n';
import { ContentRenderer } from '@/components/content-renderer';

import mapBg from '../../assets/kik-map-bg.jpg';
import map1 from '../../assets/kik-map-1.png';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/explore/phase-1')({
  component: Phase1,
});

function Phase1() {
  const { copy } = useI18n();

  return (
    <>
      <div className="absolute top-10 right-10 z-10 p-2">
        <div className="flex flex-col items-center gap-8 py-4 text-right text-white">
          <h1 className="py-4 text-2xl font-bold">{copy.pages.phase1.title}</h1>
          {copy.pages.phase1.blocks.map(block => (
            <ContentRenderer block={block} />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-3 rounded-lg border bg-gray-100 p-5 text-right">
          <Button size={'lg'} variant={'ghost'} asChild>
            <Link to="/explore">Back</Link>
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
        className="absolute top-0 left-0 z-0 h-full w-full object-cover"
      />
    </>
  );
}
