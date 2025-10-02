import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'motion/react';

// components
import { Button } from '../../components/ui/button';

export const Route = createFileRoute('/explore/')({
  component: explore,
});

function explore() {
  return (
    <div className="flex h-screen flex-col justify-center gap-4 border border-blue-300 p-8">
      <div className="bg-background/20 flex flex-col items-center gap-8 rounded-2xl p-4 text-center">
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
          className="flex w-full max-w-prose flex-col items-center justify-center gap-4 text-center"
        >
          <Button size={'lg'} className="w-full py-8" variant={'outline'} asChild>
            <Link to="/map">Map</Link>
          </Button>
          <Button size={'lg'} className="w-full py-8" variant={'outline'} asChild>
            <Link to="/benefits">Benefits of KIK & SEZ</Link>
          </Button>
          <Button size={'lg'} className="w-full py-8" variant={'outline'} asChild>
            <Link to="/testimonies">Testimonies</Link>
          </Button>
          <Button size={'lg'} className="w-full py-8" variant={'outline'} asChild>
            <Link to="/micro-infrastructure">Micro Infrastructure</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
