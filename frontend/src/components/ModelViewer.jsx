import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

export default function ModelViewer({ modelUrl, bgColor, wireframe }) {
  return (

  <div className="w-full lg:w-[600px] aspect-square rounded-xl overflow-hidden border shadow-md">

<Canvas camera={{ position: [0, 1.5, 4], fov: 50 }}>
<color attach="background" args={[bgColor]} />
<ambientLight intensity={0.5} />
<directionalLight
 position={[5, 5, 5]}
 intensity={1}
 castShadow
/>
<OrbitControls enablePan enableZoom enableRotate />

{
modelUrl && <Model url={modelUrl} wireframe={wireframe} />
}

</Canvas>

</div>
  );
}