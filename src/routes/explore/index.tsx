import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'motion/react';
import { ArrowLeftCircle } from 'lucide-react';

// components
import { Button } from '@/components/ui/button';

const nav = [
  { id: 'map', name: 'Map', to: '/map/3d' },
  { id: 'benefits', name: 'Benefits of KIK & SEZ', to: '/benefits' },
  { id: 'testimonials', name: 'Testimonials', to: '/testimonies' },
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
            <motion.button
              animate={{ opacity: 1, y: 0, scale: 1 }}
              initial={{ opacity: 0, y: 20, scale: 1.33 }}
              transition={{
                duration: 1,
                ease: [0.4, 0.0, 0.2, 1], // material design feel
                delay: i * 0.15,
              }}
              key={item.id}
              className="flex w-full items-center justify-center"
            >
              <Link
                to={item.to}
                className="w-full rounded-lg border bg-gray-100 py-8 text-xl font-semibold dark:bg-black"
              >
                {item.name}
              </Link>
            </motion.button>
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
