import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'motion/react';
import { ArrowLeftCircle } from 'lucide-react';

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
    image: beurer,
  },
  {
    id: 'tmai',
    name: 'TMAI',
    fullName: 'PT. Trina Mas Agra Indonesia',
    image: tmai,
  },
  {
    id: 'btr',
    name: 'BTR',
    fullName: 'PT. Indonesia BTR New Energy Material',
    image: btr,
  },
  {
    id: 'daeyoung',
    name: 'Dae Young Textile',
    fullName: 'PT. Dae Young Textile',
    image: daeyoung,
  },
  {
    id: 'kawanlama',
    name: 'Kawan Lama',
    fullName: 'Kawan Lama Group',
    image: kawanlama,
  },
  {
    id: 'polygroup',
    name: 'Polygroup',
    fullName: 'PT. Polygroup Manufaktur Indonesia',
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
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold"
        >
          Testimonies
        </motion.h1>
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="max-w-prose space-y-4"
        >
          <p>
            Hear directly from our current investors and partners. These testimonials reflect their
            journey, experience, and the strategic value they’ve found in Kendal Industrial Park.
          </p>

          {/* <p>Select a company to watch their story.</p> */}
        </motion.div>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="py-2"
        >
          <div className="grid w-full grid-cols-3 items-center justify-center gap-x-12 gap-y-6 text-center">
            {companies.map((company, i) => (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 1.5, delay: 1 + i * 0.25 }}
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
        <Button size={'lg'} variant={'outline'} asChild>
          <Link to="/explore">
            <ArrowLeftCircle />
            Back
          </Link>
        </Button>
      </div>
    </div>
  );
}
