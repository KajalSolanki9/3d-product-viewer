import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./Model";
import Loader from "./Loader";

export default function ModelViewer({ modelUrl, bgColor, wireframe }) {
  return (
    <div className="w-full lg:w-[600px] aspect-square rounded-xl overflow-hidden border shadow-md">

      <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>

        {/* background */}
        <color attach="background" args={[bgColor]} />

        {/* lighting */}
     <ambientLight intensity={3} />
<directionalLight position={[5,5,5]} intensity={4} />

        {/* environment reflection */}
        <Environment preset="city" />

        {/* camera controls */}
        <OrbitControls
          enablePan
          enableZoom
          enableRotate
          maxDistance={10}
          minDistance={1}
        />

        {/* model loading */}
        <Suspense fallback={<Loader />}>
          {modelUrl && (
            <Model url={modelUrl} wireframe={wireframe} />
          )}
        </Suspense>

      </Canvas>

    </div>
  );
}