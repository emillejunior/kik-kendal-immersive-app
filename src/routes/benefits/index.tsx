import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'motion/react';
import { ArrowLeftCircle, Play } from 'lucide-react';

// components
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/benefits/')({
  component: benefits,
});

function benefits() {
  return (
    <div className="flex h-screen flex-col justify-center gap-4 border border-blue-300 p-8">
      <div className="bg-background/20 flex flex-col items-center gap-8 rounded-2xl p-4 text-center">
        <motion.h1
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
          className="text-2xl font-bold"
        >
          Benefits of KIK & SEZ
        </motion.h1>
        <p className="max-w-prose">
          Discover the key advantages that make Kendal Industrial Park a prime destination for
          investment and growth. From strategic location to SEZ-exclusive incentives, this video
          highlights why global businesses choose to build their future here.
        </p>

        <div className="flex gap-4">
          <Button size={'lg'} variant={'default'}>
            <Play fill="currentColor" className="block size-4 animate-pulse" />
            Play
          </Button>
          <Button size={'lg'} variant={'outline'} asChild>
            <Link to="/explore">
              <ArrowLeftCircle />
              Back
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
