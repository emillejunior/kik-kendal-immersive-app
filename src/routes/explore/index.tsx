import { createFileRoute, Link } from '@tanstack/react-router';
import { useI18n } from '../../i18n';
import { Button } from '../../components/ui/button';
import { ContentRenderer } from '@/components/content-renderer';
import mapBg from '../../assets/kik-map-bg.jpg';
import map1 from '../../assets/kik-map-1.png';
import map2 from '../../assets/kik-map-2.png';

export const Route = createFileRoute('/explore/')({
  component: explore,
});

function explore() {
  const { copy } = useI18n();

  return (
    <>
      <div className="absolute top-25 right-10 z-10 flex w-1/4 flex-col gap-4 p-8">
        <div className="bg-foreground/10 flex flex-col items-center gap-8 rounded-2xl p-4 text-right">
          <h1 className="py-4 text-4xl font-bold text-white">{copy.pages.explore.title}</h1>
          <div className="text-white">
            {copy.pages.explore.blocks.map(block => (
              <ContentRenderer block={block} />
            ))}
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-3 text-right">
            <Button size={'lg'} className="w-full" variant={'outline'} asChild>
              <Link to="/explore/phase-1">{copy.nav.phase1}</Link>
            </Button>
            <Button size={'lg'} className="w-full" variant={'outline'} asChild>
              <Link to="/explore/phase-2">{copy.nav.phase2}</Link>
            </Button>
          </div>
        </div>
      </div>
      <img
        src={map1}
        alt="phase 1 map"
        className="absolute top-0 left-0 z-1 h-full w-full object-cover"
      />
      <img
        src={map2}
        alt="phase 2 map"
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
