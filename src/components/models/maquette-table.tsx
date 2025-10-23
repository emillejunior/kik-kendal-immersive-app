// import { useLoader } from '@react-three/fiber'
// import { TextureLoader } from 'three'

const width = 27;
const height = 6;
const frameElevation = 0.25;
const frameWidth = 2;

export default function MaquetteTable() {
  // const planeMapTexture = useLoader(TextureLoader, '/models/plane-texture.png') // Your custom texture

  return (
    <group>
      {/* Green Plane */}
      <mesh receiveShadow position={[0, -0.3, 0]} rotation-x={-Math.PI * 0.5}>
        <boxGeometry args={[width * 1.025, width * 1.025, height * 0.1]} />
        <meshStandardMaterial
          // map={planeMapTexture}
          color="lightgreen"
          metalness={0} // No reflections
          roughness={1} // Fully rough (non-reflective)
        />
      </mesh>

      {/* Black Box */}
      <mesh position={[0, -3, 0]} rotation-x={-Math.PI * 0.5}>
        <boxGeometry args={[width, width, height * 0.9]} />
        <meshStandardMaterial
          color="black"
          metalness={0} // No reflections
          roughness={1} // Fully rough (non-reflective)
        />
      </mesh>

      {/* Gold Frame */}
      <mesh position={[0, -height / 2 + 2.5, width / 2]} rotation-x={-Math.PI * 0.5}>
        <boxGeometry args={[width, frameWidth, height / 10 + frameElevation]} />
        <meshStandardMaterial
          color="gold"
          metalness={0.95} // No reflections
          roughness={0.2} // Fully rough (non-reflective)
        />
      </mesh>
      <mesh position={[0, -height / 2 + 2.5, -width / 2]} rotation-x={-Math.PI * 0.5}>
        <boxGeometry args={[width, frameWidth, height / 10 + frameElevation]} />
        <meshStandardMaterial
          color="gold"
          metalness={0.95} // No reflections
          roughness={0.2} // Fully rough (non-reflective)
        />
      </mesh>
      <mesh
        position={[width / 2 + frameWidth / 4, -height / 2 + 2.5, 0]}
        rotation-x={-Math.PI * 0.5}
      >
        <boxGeometry args={[1, width + frameWidth, height / 10 + frameElevation]} />
        <meshStandardMaterial
          color="gold"
          metalness={0.95} // No reflections
          roughness={0.2} // Fully rough (non-reflective)
        />
      </mesh>
      <mesh
        position={[-width / 2 - frameWidth / 4, -height / 2 + 2.5, 0]}
        rotation-x={-Math.PI * 0.5}
      >
        <boxGeometry args={[1, width + frameWidth, height / 10 + frameElevation]} />
        <meshStandardMaterial
          color="gold"
          metalness={0.95} // No reflections
          roughness={0.2} // Fully rough (non-reflective)
        />
      </mesh>

      {/* Floor */}
      <mesh position={[0, -3, 0]} rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[width * 4, width * 4]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}
