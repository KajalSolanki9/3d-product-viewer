import { Html } from "@react-three/drei";

export default function Loader() {
  return (
    <Html center>
      <div className="bg-black text-white px-4 py-2 rounded-lg text-sm">
        Loading 3D Model...
      </div>
    </Html>
  );
}