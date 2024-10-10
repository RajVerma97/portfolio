"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "./components/Loading";
import { Canvas } from "@react-three/fiber";
import CustomCursor from "./components/CustomCursor";

const DynamicLandingPage = dynamic(
  () => import("@/app/components/LandingPage"),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);
const DynamicSkillsSection = dynamic(
  () => import("@/app/components/SkillSection"),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);
const DynamicProjectsSection = dynamic(
  () => import("@/app/components/ProjectSection"),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);
const DynamicMusicSection = dynamic(
  () => import("@/app/components/MusicSection"),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);
const DynamicContactSection = dynamic(
  () => import("@/app/components/ContactSection"),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Canvas className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <CustomCursor />
      </Canvas>
      <Suspense fallback={<Loading />}>
        <DynamicLandingPage />
        <DynamicSkillsSection />
        <DynamicProjectsSection />
        <DynamicMusicSection />
        <DynamicContactSection />
      </Suspense>
    </main>
  );
}
