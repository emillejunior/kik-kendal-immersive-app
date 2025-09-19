import MainRoads from './main-roads';
import Outline from './outline';
import Phase1 from './phase-1';
import Phase2 from './phase-2';
import SecondaryRoads from './secondary-roads';
import { motion } from 'motion/react';

export default function Map() {
  return (
    <svg
      width="1920"
      height="1080"
      viewBox="0 0 1920 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute top-0 left-0 z-1 h-full w-full object-cover"
    >
      <g id="Map">
        {/* <rect x="0.5" y="0.5" width="1919" height="1079" stroke="black" /> */}

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0] }}
          transition={{ duration: 0.33, ease: 'easeInOut', repeat: 2, delay: 1.5 }}
        >
          <Outline phase="both" />
        </motion.g>

        <motion.g
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <SecondaryRoads />
          <MainRoads />
        </motion.g>
        <motion.g
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <Phase1 />
          <Phase2 />
        </motion.g>
      </g>
    </svg>
  );
}
