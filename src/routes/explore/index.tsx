import { createFileRoute, Link } from '@tanstack/react-router';
import { useI18n } from '../../i18n';
import { Button } from '../../components/ui/button';
import { ContentRenderer } from '@/components/content-renderer';
import mapBg from '../../assets/kik-map-bg.jpg';
import map1 from '../../assets/kik-map-1.png';
import map2 from '../../assets/kik-map-2.png';
import { motion } from 'motion/react';
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
        <div className="bg-background/20 flex flex-col items-center gap-8 rounded-2xl p-4 text-right">
          <h1 className="text-foreground py-4 text-4xl font-bold">{copy.pages.explore.title}</h1>
          <div className="text-foreground">
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
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-0 left-0 z-1 h-full w-full"
      >
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
      </motion.div>
      <motion.img
        animate={{ opacity: theme === 'dark' ? 0.25 : 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        src={mapBg}
        alt="map background"
        className="absolute top-0 left-0 z-0 h-full w-full object-cover dark:opacity-25"
      />
    </>
  );
}
