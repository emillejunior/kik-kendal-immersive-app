import { useGLTF } from '@react-three/drei';

import { MeshStandardMaterial } from 'three';
import { useEffect } from 'react';
export default function TableModel() {
  console.log('TableModel');
  const gltf = useGLTF('/models/table.glb');

  console.log('gltf ==>', gltf);

  useEffect(() => {
    // Ensure the GLTF and scene are valid
    if (gltf?.scene) {
      // Create a material for buildings
      const tableMaterial = new MeshStandardMaterial({
        color: 'gold',
        roughness: 0.33, // Matte appearance
        metalness: 0.25, // Slight metallic effect
        emissive: 'white',
        emissiveIntensity: 0.1,
      });

      // Traverse the scene
      gltf.scene.traverse(child => {
        console.log('child..', child.name);
        if ((child as any).isMesh) {
          const mesh = child as any;

          mesh.castShadow = true; // Allow the object to cast shadows
          mesh.receiveShadow = true; // Allow the object to receive shadows

          // Apply building material to non-road objects
          if (!mesh.name.toLowerCase().includes('Table')) {
            console.log('Applying tableMaterial to ', mesh.name);
            mesh.material = tableMaterial;
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
