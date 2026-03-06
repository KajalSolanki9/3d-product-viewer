import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useEffect } from "react";
import Hotspot from "./Hotspot";

export default function Model({ url, wireframe }) {

  const { scene } = useGLTF(url);

  useEffect(() => {

    scene.traverse((child) => {

      if (child.isMesh) {

        if (Array.isArray(child.material)) {

          child.material.forEach((mat) => {
            mat.wireframe = wireframe;
            mat.needsUpdate = true;
          });

        } else {

          child.material.wireframe = wireframe;
          child.material.needsUpdate = true;

        }

        child.castShadow = true;
        child.receiveShadow = true;

      }

    });

  }, [scene, wireframe]);

  useEffect(() => {

    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    scene.position.sub(center);

    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = maxDim === 0 ? 1 : 30 / maxDim;

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