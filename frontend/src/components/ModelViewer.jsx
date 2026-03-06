import { Canvas } from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import { Suspense } from "react";
import Model from "./Model";
import Loader from "./Loader";

export default function ModelViewer({ modelUrl, bgColor, wireframe }) {
  return (
    <div className="w-full lg:w-[600px] aspect-square rounded-xl overflow-hidden border shadow-md">

      <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>

  <ambientLight intensity={0.7} />
  <directionalLight position={[5, 5, 5]} />

  <Suspense fallback={<span>Loading...</span>}>
    <Model url={modelUrl} />
  </Suspense>

 <OrbitControls
  enablePan
  enableZoom
  enableRotate
  minDistance={1}
  maxDistance={10}
/>

</Canvas>
    </div>
  );
}