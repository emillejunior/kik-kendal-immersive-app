import { useGLTF } from '@react-three/drei';

import { MeshStandardMaterial } from 'three';
import { useEffect } from 'react';
export default function SegmentsModel() {
  console.log('SegmentsModel');
  const gltf = useGLTF('/models/segments.glb');

  console.log('gltf ==>', gltf);

  useEffect(() => {
    // Ensure the GLTF and scene are valid
    if (gltf?.scene) {
      // Create a material for buildings
      const buildingMaterial = new MeshStandardMaterial({
        color: 'lightgray',
        roughness: 0.7, // Matte appearance
        metalness: 0.1, // Slight metallic effect
        emissive: 'white',
        emissiveIntensity: 0.1,
      });

      // Traverse the scene
      gltf.scene.traverse(child => {
        if ((child as any).isMesh) {
          const mesh = child as any;

          mesh.castShadow = true; // Allow the object to cast shadows
          mesh.receiveShadow = true; // Allow the object to receive shadows

          // Apply building material to non-road objects
          if (!mesh.name.toLowerCase().includes('road')) {
            mesh.material = buildingMaterial;
          }
          // For road objects, keep the original material
          else {
            console.log(`Keeping original material for: ${mesh.name}`);
          }
        }
      });
    }
  }, [gltf]);

  if (gltf?.scene) return <primitive object={gltf.scene} position={[0, 0, 0]} />;
}
