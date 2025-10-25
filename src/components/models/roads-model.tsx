import { useGLTF } from '@react-three/drei';

import { MeshStandardMaterial } from 'three';
import { useEffect } from 'react';
export default function RoadsModel() {
  console.log('RoadsModel');
  const gltf = useGLTF('/models/roads.glb');

  console.log('gltf ==>', gltf);

  useEffect(() => {
    // Ensure the GLTF and scene are valid
    if (gltf?.scene) {
      // Create a material for buildings
      const seaMaterial = new MeshStandardMaterial({
        color: 'blue',
        roughness: 0.5, // Matte appearance
        // metalness: 1, // Slight metallic effect
        // emissive: 'white',
        // emissiveIntensity: 0.1,
      });
      const landMaterial = new MeshStandardMaterial({
        color: 'green',
        roughness: 0.5, // Matte appearance
        // metalness: 0.1, // Slight metallic effect
        // emissive: 'white',
        emissiveIntensity: 0.1,
      });
      const roadMaterial = new MeshStandardMaterial({
        color: 'black',
        roughness: 0.5, // Matte appearance
        // metalness: 0.1, // Slight metallic effect
        // emissive: 'white',
        emissiveIntensity: 0.1,
      });

      // Traverse the scene
      gltf.scene.traverse(child => {
        if ((child as any).isMesh) {
          const mesh = child as any;

          mesh.castShadow = true; // Allow the object to cast shadows
          mesh.receiveShadow = true; // Allow the object to receive shadows

          // Apply building material to non-road objects
          if (
            mesh.name.toLowerCase().includes('BaseSea') ||
            mesh.name.toLowerCase().includes('air')
          ) {
            console.log('applying seaMaterial to ', mesh.name);
            mesh.material = seaMaterial;
          }
          // For road objects, keep the original material
          else if (mesh.name.toLowerCase().includes('BaseLand')) {
            // console.log(`Keeping original material for: ${mesh.name}`);
            console.log('applying landMaterial to ', mesh.name);
            mesh.material = landMaterial;
          } else if (mesh.name.toLowerCase().includes('jalan')) {
            // console.log(`Keeping original material for: ${mesh.name}`);
            console.log('applying roadMaterial to ', mesh.name);
            mesh.material = roadMaterial;
          }
        }
      });
    }
  }, [gltf]);

  if (gltf?.scene) return <primitive object={gltf.scene} position={[0, 0, 0]} />;
}
