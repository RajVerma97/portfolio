import { Canvas, useFrame } from "@react-three/fiber";
import {
  EffectComposer,
  Bloom,
  ToneMapping,
} from "@react-three/postprocessing";
import { useGLTF, Stage, Grid, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useSpring } from "@react-spring/three";
import * as THREE from "three";

interface KamdoProps {
  rotation?: [number, number, number];
}

interface KamdoGLTF {
  nodes: {
    body001: THREE.Mesh;
    head001: THREE.Mesh;
    stripe001: THREE.Mesh;
  };
  materials: {
    Body: THREE.Material;
    Head: THREE.Material;
  };
}

function Kamdo(props: KamdoProps) {
  const head = useRef<THREE.Group>(null);
  const stripe = useRef<THREE.MeshBasicMaterial>(null);
  const light = useRef<THREE.PointLight>(null);

  const { nodes, materials } = useGLTF(
    "/s2wt_kamdo_industrial_divinities-transformed.glb"
  ) as unknown as KamdoGLTF;

  const [, api] = useSpring(() => ({
    rotation: [0, 0, 0],
  }));

  useFrame((state) => {
    const t = (1 + Math.sin(state.clock.elapsedTime * 2)) / 2;

    if (stripe.current && head.current && light.current) {
      stripe.current.color.setRGB(2 + t * 20, 2, 20 + t * 50);

      const yRotation =
        state.pointer.x * (state.camera.position.z > 1 ? 1 : -1) +
        state.clock.elapsedTime * 20;

      api.start({
        rotation: [0, yRotation, 0],
      });

      light.current.intensity = 1 + t * 4;
    }
  });

  return (
    <group {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body001.geometry}
        material={materials.Body}
      />
      <group ref={head}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.head001.geometry}
          material={materials.Head}
        />
        <mesh castShadow receiveShadow geometry={nodes.stripe001.geometry}>
          <meshBasicMaterial ref={stripe} toneMapped={false} />
          <pointLight
            ref={light}
            intensity={0.5}
            color={new THREE.Color(10, 2, 5)}
            distance={2.5}
          />
        </mesh>
      </group>
    </group>
  );
}
const RobotSpiderBackground = () => {
  return (
    <div
      className="relative overflow-hidden h-[80vh] w-full rounded-md"
      style={{
        borderRadius: "1em",
      }}
    >
      <Canvas
        flat
        shadows
        camera={{ position: [-15, 0, 10], fov: 30 }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <fog attach="fog" args={["black", 15, 22.5]} />
        <Stage
          intensity={0.5}
          environment="city"
          shadows={{ type: "accumulative", bias: -0.001, intensity: Math.PI }}
          adjustCamera={false}
        >
          <Kamdo rotation={[0, -Math.PI / 2, 0]} />
        </Stage>
        <Grid
          renderOrder={-1}
          position={[0, -1.85, 0]}
          infiniteGrid
          cellSize={0.6}
          cellThickness={0.6}
          sectionSize={3.3}
          sectionThickness={1.5}
          sectionColor={new THREE.Color(0.5, 0.5, 10)}
          fadeDistance={30}
        />

        <OrbitControls
          autoRotate
          autoRotateSpeed={0.05}
          enableZoom={false}
          makeDefault
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <EffectComposer enableNormalPass={false}>
          <Bloom luminanceThreshold={2} mipmapBlur />
          <ToneMapping />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default RobotSpiderBackground;
