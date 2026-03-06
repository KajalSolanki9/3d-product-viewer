import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import Hotspot from "./Hotspot";
import { useEffect } from "react";

export default function Model({ url, wireframe }) {

  const { scene } = useGLTF(url);

  // wireframe control
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.wireframe = wireframe;
        child.material.needsUpdate = true;
      }
    });
  }, [scene, wireframe]);

  // center and scale model
  useEffect(() => {

    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center);
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = maxDim === 0 ? 1 : 2.5 / maxDim;
    scene.scale.setScalar(scale);

  }, [scene]);

  return (
    <>
      <primitive object={scene} />
      <Hotspot position={[0, 1, 0]} label="Back Support" />
      <Hotspot position={[0, 0.4, 0]} label="Cushion Seat" />
    </>
  );

}
useGLTF.preload();