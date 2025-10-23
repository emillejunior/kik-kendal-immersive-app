import { Canvas } from '@react-three/fiber';
import { createFileRoute } from '@tanstack/react-router';
import { Perf } from 'r3f-perf';

import Experience from '@/components/experience';

export const Route = createFileRoute('/map/3d')({
  component: RootMapComponent,
});

const cameraHeight = 20;

function RootMapComponent() {
  return (
    <div className="h-screen w-full bg-green-200">
      <Canvas
        shadows
        gl={{ antialias: true }}
        camera={{
          fov: 30,
          near: 0.1,
          far: 20000,
          position: [1, cameraHeight, -1],
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#87CEEB'); // Sky blue background
        }}
      >
        <Perf />
        <Experience />
      </Canvas>
    </div>
  );
}
