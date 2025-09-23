import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'motion/react';

// assets
import mapBg from '../../assets/kik-map-bg.jpg';

// components
import { Button } from '../../components/ui/button';
import { ContentRenderer } from '@/components/content-renderer';
import { MapFull } from '@/components/map/map-full';

// hooks
import { useI18n } from '../../i18n';
import { useTheme } from '@/components/theme-provider';

export const Route = createFileRoute('/explore/')({
  component: explore,
});

function explore() {
  const { copy } = useI18n();
  const { theme } = useTheme();

  return (
    <>
      <div className="absolute top-25 right-10 z-10 flex w-1/4 flex-col gap-4 p-8">
        <div className="bg-background/20 flex flex-col items-center gap-8 rounded-2xl p-4 text-center">
          <h1 className="text-foreground py-4 text-4xl font-bold">{copy.pages.explore.title}</h1>
          <div className="text-foreground">
            {copy.pages.explore.blocks.map(block => (
              <ContentRenderer block={block} />
            ))}
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-3 text-center">
            <Button size={'lg'} className="w-full" variant={'outline'} asChild>
              <Link to="/explore/phase-1">{copy.nav.phase1}</Link>
            </Button>
            <Button size={'lg'} className="w-full" variant={'outline'} asChild>
              <Link to="/explore/phase-2">{copy.nav.phase2}</Link>
            </Button>
          </div>
        </div>
      </div>
      <MapFull />
      <motion.img
        animate={{ opacity: theme === 'dark' ? 0.25 : 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        src={mapBg}
        alt="map background"
        className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full object-cover dark:opacity-25"
      />
    </>
  );
}
