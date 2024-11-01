import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/bird.glb";

export default function Bird() {
  const birdRef = useRef();

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(birdScene);

  // Get access to the animations for the bird
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    if (actions["Take 001"]) {
      actions["Take 001"].play();
    }
  }, [actions]);

  useFrame(({ clock }) => {
    if (!birdRef.current) return;

    // Update the Y position to simulate bird-like motion using a sine wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Set initial rotation to face backward
    birdRef.current.rotation.y = Math.PI;

    // Move the bird away from the screen along the Z-axis
    birdRef.current.position.z -= 0.02;
  });

  return (
    <mesh ref={birdRef} position={[-5, 5, 0]} scale={[1, 1, 1]}>
      <primitive object={scene} />
    </mesh>
  );
}
