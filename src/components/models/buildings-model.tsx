import { useGLTF } from '@react-three/drei';

import { MeshStandardMaterial } from 'three';
import { useEffect } from 'react';
export default function BuildingsModel() {
  console.log('BuildingsModel');
  const gltf = useGLTF('/models/buildings.glb');

  console.log('gltf ==>', gltf);

  useEffect(() => {
    // Ensure the GLTF and scene are valid
    if (gltf?.scene) {
      // Create a material for buildings
      const buildingMaterial = new MeshStandardMaterial({
        color: 'darkgray',
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

          // Apply building material
          if (mesh.name.toLowerCase().includes('bangunan')) {
            mesh.material = buildingMaterial;
          }
        }
      });
    }
  }, [gltf]);

  if (gltf?.scene) return <primitive object={gltf.scene} position={[0, 0, 0]} />;
}
