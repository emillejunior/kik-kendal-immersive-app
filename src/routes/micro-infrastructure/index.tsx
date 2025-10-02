import { Button } from '@/components/ui/button';
import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'motion/react';

// components
// import { Button } from '../../components/ui/button';

export const Route = createFileRoute('/micro-infrastructure/')({
  component: microInfrastructure,
});

const buttons = [
  'Truck Parking',
  'Switchyard',
  'Hangar In',
  'Hangar Out',
  'Existing PLN MV',
  'Waste Water Treatment',
  'Place of Worship',
  'Fire Brigade',
  'Raw Water Reservoir',
  'Reservoir Expansion',
];

function microInfrastructure() {
  return (
    <div className="flex h-screen flex-col justify-center gap-4 border border-blue-300 p-8">
      <div className="bg-background/20 flex flex-col items-center gap-8 rounded-2xl p-4 text-center">
        <motion.h1
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
          className="text-2xl font-bold"
        >
          Micro Infrastructure
        </motion.h1>
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
          className="grid w-full max-w-prose grid-cols-2 grid-rows-2 gap-4 text-center"
        >
          {buttons.map(button => (
            <Button size={'lg'} className="w-full py-8" variant={'default'}>
              {button}
            </Button>
          ))}
        </motion.div>

        <Button size={'lg'} variant={'outline'} asChild>
          <Link to="/explore">Back</Link>
        </Button>
      </div>
    </div>
  );
}
