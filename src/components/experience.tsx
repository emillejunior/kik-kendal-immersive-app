import { Suspense, useEffect, useRef, useState } from 'react';
import { Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { OrbitControls } from '@react-three/drei';

// import MaquetteTable from './models/maquette-table.tsx';
import LoadingAnimation from './loading-animation';
// import PointOfInterests from './PointOfInterests'
// import CameraResetWrapper from './CameraResetWrapper'

// import Model from './models/model';
import TableModel from './models/table-model';
import RoadsModel from './models/roads-model';
import BuildingsModel from './models/buildings-model';
import SegmentsModel from './models/segments-model';
// import MaquetteTable from './models/table';
// import RoadsModel from './models/roads';

const SUN_POSITION = new Vector3(10, 5, 10);

export default function Experience() {
  const controlsRef = useRef<OrbitControlsImpl | null>(null);

  const [isUserInteracting, setIsUserInteracting] = useState(false);

  const isRotating = true;
  const rotationSpeed = 0.005; // Speed of the rotation

  useEffect(() => {
    const controls = controlsRef.current;
    if (controls) {
      const handleStart = () => setIsUserInteracting(true);
      const handleEnd = () => setIsUserInteracting(false);

      controls.addEventListener('start', handleStart);
      controls.addEventListener('end', handleEnd);

      return () => {
        controls.removeEventListener('start', handleStart);
        controls.removeEventListener('end', handleEnd);
      };
    }
  }, []);

  useFrame(() => {
    const controls = controlsRef.current;
    if (controls && !isUserInteracting && isRotating) {
      if (controls.enabled) {
        // Only rotate the camera when the user is not interacting
        controls.setAzimuthalAngle(controls.getAzimuthalAngle() + rotationSpeed);
        controls.update();
      }
    }
  });

  return (
    <>
      <Suspense fallback={<LoadingAnimation />}>
        <>
          <BuildingsModel />
          <SegmentsModel />
          <RoadsModel />
          {/* <TableModel /> */}
          {/* <Model /> */}
          {/* <RoadsModel /> */}
        </>
      </Suspense>
      {/* <MaquetteTable /> */}

      <OrbitControls
        ref={controlsRef}
        makeDefault
        minPolarAngle={Math.PI / 6} // Upper limit
        maxPolarAngle={Math.PI / 2.5} // Bottom limit
        minDistance={1} // Minimum zoom distance (camera can't zoom in closer than 5 units)
        maxDistance={40} // Maximum zoom distance (camera can't zoom out further than 20 units)
      />

      {/* Lights */}
      <group>
        <directionalLight
          castShadow
          position={SUN_POSITION}
          intensity={2}
          shadow-mapSize-width={1024 * 2}
          shadow-mapSize-height={1024 * 2}
          shadow-camera-left={-10}
          shadow-camera-right={10}
        />
        <ambientLight intensity={1.2} />
      </group>
    </>
  );
}
