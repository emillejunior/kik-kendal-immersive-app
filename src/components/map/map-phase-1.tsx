import { motion } from 'motion/react';

// assets
import { MainRoadsSvg } from './svg/main-roads';
import { OutlineSvg } from './svg/outline';
import { Phase1Svg } from './svg/phase-1';
import { SecondaryRoadsSvg } from './svg/secondary-roads';

export function MapPhase1() {
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
          <OutlineSvg phase="phase-1" />
        </motion.g>

        <motion.g
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <SecondaryRoadsSvg />
          <MainRoadsSvg />
        </motion.g>
        <motion.g
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <Phase1Svg />
        </motion.g>
      </g>
    </svg>
  );
}
