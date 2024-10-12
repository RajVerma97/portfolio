"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "./components/Loading";

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
// const DynamicContactSection = dynamic(
//   () => import("@/app/components/ContactSection"),
//   {
//     ssr: false,
//     loading: () => <Loading />,
//   }
// );

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Suspense fallback={<Loading />}>
        <div className="grid gap-10">
          <DynamicLandingPage />
          <DynamicSkillsSection />
          <DynamicProjectsSection />
          <DynamicMusicSection />
          {/* <DynamicContactSection /> */}
        </div>
      </Suspense>
    </main>
  );
}
