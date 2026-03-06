import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import Hotspot from "./Hotspot";
import { useEffect } from "react";

export default function Model({ url, wireframe }) {

  const { scene } = useGLTF(url);

  useEffect(() => {

    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.wireframe = wireframe;
        child.material.needsUpdate = true;
      }
    });

  }, [scene, wireframe]);

  useEffect(() => {

    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    scene.position.x -= center.x;
    scene.position.y -= center.y;
    scene.position.z -= center.z;

    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 2 / maxDim;

    scene.scale.set(scale, scale, scale);

  }, [scene]);

  return (
    <>
      <primitive object={scene} />
      <Hotspot position={[0, 1, 0]} label="Back Support" />
      <Hotspot position={[0, 0.4, 0]} label="Cushion Seat" />
    </>
  );
}
useGLTF.preload("/model.glb");