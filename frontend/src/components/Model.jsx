import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import Hotspot from "./Hotspot";
import { useEffect } from "react";

export default function Model({ url, wireframe }) {
  const { scene } = useGLTF(url);

  // wireframe
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.wireframe = wireframe;
      }
    });
  }, [scene, wireframe]);

  // center model
  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3()).length();
    const center = box.getCenter(new THREE.Vector3());

    scene.position.sub(center);
if (size > 0) {
  scene.scale.setScalar(2.5 / size);
}  }, [scene]);

  return (
    <>
      <primitive object={scene} />

      <Hotspot position={[0, 1, 0]} label="Back Support" />
      <Hotspot position={[0, 0.4, 0]} label="Cushion Seat" />
    </>
  );
}