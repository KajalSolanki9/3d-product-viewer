import { Html } from "@react-three/drei";
import { useState } from "react";

export default function Hotspot({ position, label }) {
  const [open, setOpen] = useState(false);

  return (
    <group position={position}>
      {/* clickable point */}
      <mesh onClick={() => setOpen(!open)}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="red" />
      </mesh>

      {/* label */}
      {open && (
        <Html distanceFactor={10}>
          <div className="bg-white px-3 py-1 rounded shadow text-sm">
            {label}
          </div>
        </Html>
      )}
    </group>
  );
}