import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'motion/react';
import { ArrowLeftCircle, Play } from 'lucide-react';

// components
import { Button } from '@/components/ui/button';

// assets
import beurer from '@/assets/testimonies/beurer.jpeg';
import tmai from '@/assets/testimonies/tmai.jpeg';
import btr from '@/assets/testimonies/btr.jpeg';
import daeyoung from '@/assets/testimonies/daeyoung.jpeg';
import kawanlama from '@/assets/testimonies/kawanlama.jpeg';
import polygroup from '@/assets/testimonies/polygroup.jpeg';

export const Route = createFileRoute('/testimonies/')({
  component: testimonies,
});

const companies = [
  {
    id: 'beurer',
    name: 'Beurer',
    fullName: 'PT. Beurer Indonesia Technology',
    personName: 'Andreas Dapp',
    personRole: 'Director',
    image: beurer,
  },
  {
    id: 'tmai',
    name: 'TMAI',
    fullName: 'PT. Trina Mas Agra Indonesia',
    personName: 'Wilson Kurniawan',
    personRole: 'Chief Financial Officer',
    image: tmai,
  },
  {
    id: 'btr',
    name: 'BTR',
    fullName: 'PT. Indonesia BTR New Energy Material',
    personName: 'Wu Lei',
    personRole: 'Director',
    image: btr,
  },
  {
    id: 'daeyoung',
    name: 'Dae Young Textile',
    fullName: 'PT. Dae Young Textile',
    personName: 'Kyungseon Lee',
    personRole: 'Director',
    image: daeyoung,
  },
  {
    id: 'kawanlama',
    name: 'Kawan Lama',
    fullName: 'Kawan Lama Group',
    personName: 'Sugiyanto Wibawa',
    personRole: 'Director',
    image: kawanlama,
  },
  {
    id: 'polygroup',
    name: 'Polygroup',
    fullName: 'PT. Polygroup Manufaktur Indonesia',
    personName: 'Elmer Cheng',
    personRole: 'CEO',
    image: polygroup,
  },
];

function testimonies() {
  const playTestimony = (company: string) => {
    console.log(company);
  };

  return (
    <div className="flex h-screen flex-col justify-center gap-4 border border-blue-300 p-8">
      <div className="bg-background/20 flex flex-col items-center gap-6 rounded-2xl p-4 text-center">
        <motion.h1
          animate={{ opacity: 1, scale: 1, y: 0 }}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.75 }}
          className="text-5xl font-bold"
        >
          Testimonials
        </motion.h1>
        <motion.h2
          animate={{ opacity: 1, scale: 1, y: 10 }}
          initial={{ opacity: 0, scale: 0.9, y: 0 }}
          transition={{
            duration: 0.75,
            delay: 0.1,
          }}
          className="text-xl"
        >
          Hear directly from our current investors and partners.
          {/* <p>Select a company to watch their story.</p> */}
        </motion.h2>
      </div>
      <div className="bg-background/20 flex flex-col items-center gap-6 rounded-2xl p-4 text-center">
        <motion.p
          animate={{ opacity: 1, y: -20 }}
          initial={{ opacity: 0, y: 0 }}
          transition={{
            duration: 0.75,
            delay: 1,
          }}
          className="max-w-prose"
        >
          These testimonials reflect their journey, experience, and the strategic value they’ve
          found in Kendal Industrial Park.
        </motion.p>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{
            duration: 0.75,
            delay: 1.25,
          }}
          className="py-2"
        >
          <div className="grid w-full grid-cols-3 items-center justify-center gap-x-12 gap-y-6 text-center">
            {companies.map((company, i) => (
              <motion.div
                animate={{ opacity: 1, rotateZ: 0, y: 0 }}
                initial={{ opacity: 0, rotateZ: -3, y: 10 }}
                transition={{
                  duration: 0.66,
                  delay: 1 + i * 0.2,
                }}
                key={company.id}
                className="flex flex-col"
              >
                <Button
                  key={company.id}
                  size={'lg'}
                  variant={'outline'}
                  className="relative h-auto w-auto overflow-hidden p-0"
                  onClick={() => playTestimony(company.id)}
                >
                  <img
                    src={company.image}
                    alt={company.name}
                    className="h-auto w-64 object-cover"
                  />
                </Button>
                <div className="flex flex-col py-2 text-left">
                  <span className="text-lg font-bold">{company.name}</span>
                  <span className="text-xs opacity-75">{company.fullName}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="space-x-4">
          <Button size={'lg'} variant={'outline'} asChild>
            <Link to="/explore">
              <ArrowLeftCircle />
              Back
            </Link>
          </Button>
          <Button size={'lg'} variant={'outline'} asChild>
            <Link to="/explore">
              <Play />
              Play All
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
