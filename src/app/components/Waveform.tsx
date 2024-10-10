import React, { useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface WaveformProps {
  audioData: number[];
}

const Waveform: React.FC<WaveformProps> = ({ audioData }) => {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i < audioData.length; i++) {
      const x = (i / audioData.length) * 4 - 2;
      const y = audioData[i] * 2;
      const z = 0;
      pts.push(new THREE.Vector3(x, y, z));
    }
    return pts;
  }, [audioData]);

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [points]);

  useFrame(() => {
    if (lineGeometry.attributes.position) {
      const positions = lineGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < audioData.length; i++) {
        positions[i * 3 + 1] = audioData[i] * 2;
      }
      lineGeometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group>
      <line>
        <bufferGeometry attach="geometry" {...lineGeometry} />
        <lineBasicMaterial attach="material" color={0x00ffff} linewidth={2} />
      </line>
    </group>
  );
};

export default Waveform;
