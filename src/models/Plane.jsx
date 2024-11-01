import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from 'three';

import planeScene from "../assets/3d/plane.glb";

export default function Plane({ isRotating, ...props }) {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);

  // Log the loaded animations
  console.log('Loaded animations:', animations);
  animations.forEach((clip) => {
    console.log('Animation Name:', clip.name);
  });

  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (actions) {
      // Play the first animation
      if (actions["Action"]) {
        actions["Action"].play();
        actions["Action"].setLoop(THREE.LoopRepeat, Infinity);
      }

      // Play the second animation
      if (actions["Cylinder.012Action"]) {
        actions["Cylinder.012Action"].play();
        actions["Cylinder.012Action"].setLoop(THREE.LoopRepeat, Infinity);
      }
    }

    // Cleanup function to stop animations when component unmounts
    return () => {
      if (actions) {
        if (actions["Action"]) {
          actions["Action"].stop();
        }
        if (actions["Cylinder.012Action"]) {
          actions["Cylinder.012Action"].stop();
        }
      }
    };
  }, [actions]);

  return (
    <group ref={ref} {...props}>
      <primitive object={scene} />
    </group>
  );
}
