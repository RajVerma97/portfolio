"use client";

import dynamic from "next/dynamic";
import Loading from "./components/Loading";
import "aos/dist/aos.css"; // Import AOS styles

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
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8    md:py-10 md:px-16 lg:py-16 lg:px-24">
      <div className="grid gap-8 md:gap-10 lg:gap-16">
        <DynamicLandingPage />
        <DynamicSkillsSection />
        <DynamicProjectsSection />
        <DynamicMusicSection />
      </div>
    </main>
  );
}
