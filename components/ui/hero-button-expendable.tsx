"use client";

import { GodRays } from "@paper-design/shaders-react";

export default function Hero() {
  return (
    <div className="absolute inset-0">
      <GodRays
        colorBack="#00000000"
        colors={["#a1a1aa40", "#e4e4e740", "#71717a40", "#52525b40"]}
        colorBloom="#a1a1aa"
        offsetX={0.85}
        offsetY={-1}
        intensity={0.5}
        spotty={0.45}
        midSize={10}
        midIntensity={0}
        density={0.38}
        bloom={0.3}
        speed={0.5}
        scale={1.6}
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  );
}
