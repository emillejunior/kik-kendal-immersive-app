import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'motion/react';

// assets
import mapBg from '../../assets/kik-map-bg.jpg';
import { ArrowLeftCircle } from 'lucide-react';

// components
import { Button } from '@/components/ui/button';
import { ContentRenderer } from '@/components/content-renderer';
import { MapPhase1 } from '@/components/map/map-phase-1';

// hooks
import { useI18n } from '../../i18n';
import { useTheme } from '@/components/theme-provider';

export const Route = createFileRoute('/map/phase-1')({
  component: Phase1,
});

function Phase1() {
  const { copy } = useI18n();
  const { theme } = useTheme();

  return (
    <>
      <div className="absolute top-25 right-10 z-10 flex w-1/4 flex-col gap-4 p-8">
        <div className="bg-background/50 flex flex-col items-center gap-8 rounded-2xl p-4 text-center">
          <h1 className="text-foreground py-4 text-4xl font-bold">{copy.pages.phase1.title}</h1>
          <div className="text-foreground">
            {copy.pages.phase1.blocks.map(block => (
              <ContentRenderer block={block} key={block.id} />
            ))}
          </div>
        </div>
        <div className="flex w-full items-center justify-center gap-3 text-center">
          <Button size={'icon'} variant={'secondary'} asChild>
            <Link to="/map">
              <ArrowLeftCircle className="h-12 w-12" />
            </Link>
          </Button>
          <Button size={'lg'} variant={'outline'} asChild>
            <Link to="/map/phase-2">{copy.nav.phase2}</Link>
          </Button>
        </div>
      </div>
      <MapPhase1 />
      <motion.img
        animate={{ scale: 1, opacity: theme === 'dark' ? 0.25 : 1 }}
        initial={{ scale: 1.05, opacity: 0 }}
        transition={{ duration: 1 }}
        src={mapBg}
        alt="map background"
        className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full object-cover opacity-50 dark:opacity-25"
      />
    </>
  );
}
