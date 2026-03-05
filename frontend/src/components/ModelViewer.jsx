import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./Model";

export default function ModelViewer({ modelUrl, bgColor, wireframe }) {
  return (
    <div className="w-full lg:w-[600px] aspect-square rounded-xl overflow-hidden border shadow-md">

      <Canvas camera={{ position: [0, 1.5, 4], fov: 50 }}>
        <color attach="background" args={[bgColor]} />
        <ambientLight intensity={2} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={3}
          castShadow
        />

        <OrbitControls enablePan enableZoom enableRotate />

        <Suspense fallback={null}>
          {modelUrl && <Model url={modelUrl} wireframe={wireframe} />}
        </Suspense>

      </Canvas>

    </div>
  );
}