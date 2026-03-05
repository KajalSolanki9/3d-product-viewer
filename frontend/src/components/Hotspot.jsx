import { Html } from "@react-three/drei";

export default function Hotspot({ position, label }) {
  return (
    <Html position={position} center>

      <div className="bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-md shadow-md">
        {label}
      </div>

    </Html>
  );
}