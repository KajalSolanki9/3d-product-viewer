import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useEffect } from "react";
import Hotspot from "./Hotspot";
export default function Model({ url, wireframe }) {

  const { scene } = useGLTF(url,true);

  useEffect(() => {

    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.wireframe = wireframe;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

  }, [scene, wireframe]);

  // center & scale
  useEffect(() => {

    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    scene.position.sub(center);

    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 2.5 / maxDim;

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