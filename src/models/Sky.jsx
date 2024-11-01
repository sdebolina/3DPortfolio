import { useGLTF } from '@react-three/drei'
import {useRef} from 'react'
import { useFrame } from '@react-three/fiber';

import skyScene from '../assets/3d/sky.glb';

export default function Sky({ isRotating }) {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.23 * delta; // Adjust the rotation speed as needed
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
}