import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'motion/react';
import { useState } from 'react';

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

const industries = [
  {
    name: 'FASHION',
    color: 'c773f7',
    companies: [{ name: 'Eclat' }, { name: 'Shenzhou' }, { name: 'Lianfa' }, { name: 'Dong Jin' }],
  },
  {
    name: 'AUTOMOTIVE & RENEWABLE ENERGY',
    color: '3c5cf5',
    companies: [{ name: 'zc rubber' }, { name: 'tmai' }, { name: 'btr' }],
  },
  {
    name: 'ELECTRONIC',
    color: 'eb4967',
    companies: [
      { name: 'Miyako' },
      { name: 'Borine' },
      { name: 'Polygroup' },
      { name: 'Kuka Home' },
      { name: 'Hengtong Group' },
    ],
  },
  {
    name: 'FURNITURE',
    color: 'f0994b',
    companies: [
      { name: 'Miyako' },
      { name: 'Borine' },
      { name: 'Polygroup' },
      { name: 'Kuka Home' },
      { name: 'Hengtong Group' },
    ],
  },
  {
    name: 'MEDICAL EQUIPMENT & PHARMACY',
    color: '7cfad1',
    companies: [{ name: 'Lucenxia' }, { name: 'Beurer' }, { name: 'Norchem' }, { name: 'Mindray' }],
  },
  { name: 'FOOD & BEVERAGE', color: 'ffff61' },
  { name: 'PACKAGING', color: '479154' },
  { name: 'TOYS & BICYCLE', color: '76fb4c' },
  { name: 'CONSTRUCTION MATERIALS', color: '562d88' },
  { name: 'OTHERS', color: '901b11' },
];

function Phase1() {
  const { copy } = useI18n();
  const { theme } = useTheme();

  const [showIndustries, setShowIndustries] = useState(false);

  const highlightIndustry = (industry: string) => {
    console.log(industry);
  };

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
      <div className="absolute top-40 left-10 z-10 flex w-1/3 flex-col gap-2 p-8">
        {showIndustries ? (
          <>
            <Button size={'lg'} onClick={() => setShowIndustries(false)}>
              Hide Industries
            </Button>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 1.5 }}
              className="flex flex-col gap-2"
            >
              {industries.map((industry, i) => (
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 1.5, delay: i * 0.25 }}
                  key={industry.name}
                  className="flex flex-col"
                >
                  <Button
                    size={'lg'}
                    onClick={() => highlightIndustry(industry.name)}
                    className="bg-background/80 hover:bg-background/90 text-foreground flex w-full justify-start py-8 text-left"
                    // variant={'outline'}
                    key={industry.name}
                  >
                    <span
                      className={`block size-4 rounded`}
                      style={{ backgroundColor: `#${industry.color}` }}
                    ></span>
                    <span className="italic">{industry.name}</span>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </>
        ) : (
          <Button size={'lg'} onClick={() => setShowIndustries(true)}>
            Show Industries
          </Button>
        )}
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
