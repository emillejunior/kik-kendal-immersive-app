import { Html } from '@react-three/drei';

export default function LoadingAnimation() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
        <p className="mt-4 animate-pulse font-bold text-nowrap text-white">Loading 3D Model...</p>
      </div>
    </Html>
  );
}
