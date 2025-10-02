import { Button } from '@/components/ui/button';
import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'motion/react';

// components
// import { Button } from '../../components/ui/button';

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

        <Button size={'lg'} variant={'outline'} asChild>
          <Link to="/explore">Back</Link>
        </Button>
      </div>
    </div>
  );
}
