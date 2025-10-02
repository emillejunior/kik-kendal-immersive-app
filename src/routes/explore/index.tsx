import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'motion/react';
import { ArrowLeftCircle } from 'lucide-react';

// components
import { Button } from '@/components/ui/button';

const nav = [
  { id: 'map', name: 'Map', to: '/map' },
  { id: 'benefits', name: 'Benefits of KIK & SEZ', to: '/benefits' },
  { id: 'testimonies', name: 'Testimonies', to: '/testimonies' },
  { id: 'micro-infrastructure', name: 'Micro Infrastructure', to: '/micro-infrastructure' },
];

export const Route = createFileRoute('/explore/')({
  component: explore,
});

function explore() {
  return (
    <div className="flex h-screen flex-col justify-center gap-4 border border-blue-300 p-8">
      <div className="bg-background/20 flex flex-col items-center gap-8 rounded-2xl p-4 text-center">
        <div className="flex w-full max-w-prose flex-col items-center justify-center gap-4 text-center">
          {nav.map((item, i) => (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 1.5, delay: i * 0.25 }}
              key={item.id}
              className="flex w-full flex-col"
            >
              <Button size={'lg'} className="w-full py-8" variant={'outline'} asChild key={item.id}>
                <Link to={item.to}>{item.name}</Link>
              </Button>
            </motion.div>
          ))}
          <div className="mt-4 flex w-full items-center justify-center gap-3 text-center">
            <Button variant={'secondary'} asChild>
              <Link to="/">
                <ArrowLeftCircle className="h-12 w-12" /> Back
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
