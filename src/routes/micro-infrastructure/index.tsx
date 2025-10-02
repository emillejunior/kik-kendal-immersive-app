import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'motion/react';
import { ArrowLeftCircle } from 'lucide-react';

// components
import { Button } from '@/components/ui/button';

// assets
import fireBrigade from '@/assets/infrastructure/fire-brigade.jpeg';
import hangar from '@/assets/infrastructure/hangar.jpeg';
import placeOfWorship from '@/assets/infrastructure/place-of-worship.jpeg';
import plnMv from '@/assets/infrastructure/pln-mv.jpeg';
import reservoir from '@/assets/infrastructure/reservoir.jpeg';
import switchyard from '@/assets/infrastructure/switchyard.jpeg';
import truckParking from '@/assets/infrastructure/truck-parking.jpeg';
import wasteWaterTreatment from '@/assets/infrastructure/waste-water-treatment.jpeg';

export const Route = createFileRoute('/micro-infrastructure/')({
  component: microInfrastructure,
});

const facilities = [
  { id: 'truck-parking', name: 'Truck Parking', image: truckParking },
  { id: 'switchyard', name: 'Switchyard', image: switchyard },
  { id: 'hangar', name: 'Hangar', image: hangar },
  { id: 'pln-mv', name: 'Existing PLN MV', image: plnMv },
  { id: 'place-of-worship', name: 'Place of Worship', image: placeOfWorship },
  { id: 'fire-brigade', name: 'Fire Brigade', image: fireBrigade },
  { id: 'waste-water-treatment', name: 'Waste Water Treatment', image: wasteWaterTreatment },
  { id: 'reservoir', name: 'Reservoir', image: reservoir },
];

function microInfrastructure() {
  return (
    <div className="flex h-screen flex-col justify-center gap-4 border border-blue-300 p-8">
      <div className="bg-background/20 flex flex-col items-center gap-6 rounded-2xl p-4 text-center">
        <motion.h1
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold"
        >
          Micro Infrastructure
        </motion.h1>
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="max-w-prose space-y-4"
        >
          <p>
            Explore the essential infrastructures that power our ecosystem. Select an item to
            highlight it on the maquette and see exactly where it fits in our integrated plan.
          </p>
        </motion.div>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="py-2"
        >
          <div className="grid w-full grid-cols-4 items-center justify-center gap-x-12 gap-y-6 text-center">
            {facilities.map((facility, i) => (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 1.5, delay: 1 + i * 0.25 }}
                key={facility.id}
                className="flex flex-col"
              >
                <Button
                  key={facility.id}
                  size={'lg'}
                  variant={'outline'}
                  className="relative h-auto w-auto overflow-hidden p-0"
                  // onClick={() => playTestimony(facility.id)}
                >
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="h-32 w-64 object-cover"
                  />
                </Button>
                <div className="flex flex-col py-2 text-left">
                  <span className="text-lg font-bold">{facility.name}</span>
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
