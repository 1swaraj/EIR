import { PageBackground } from "./components/PageBackground";
import { SiteHeader } from "./components/SiteHeader";
import { StickyCTA } from "./components/StickyCTA";
import { DefaultPath } from "./sections/DefaultPath";
import { FAQ } from "./sections/FAQ";
import { FinalCTA } from "./sections/FinalCTA";
import { ForNotFor } from "./sections/ForNotFor";
import { Hero } from "./sections/Hero";
import { HowItWorks } from "./sections/HowItWorks";
import { TheProblem } from "./sections/TheProblem";
import { WeeklyDemo } from "./sections/WeeklyDemo";
import { WhatYouGet } from "./sections/WhatYouGet";
import { WhyMonad } from "./sections/WhyMonad";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <PageBackground />
      <SiteHeader />
      <main className="relative z-10 pb-[calc(5rem+env(safe-area-inset-bottom,0px))] md:pb-0">
        {/*
          Figma Page Template: dark strip under fixed nav, then main canvas with rounded top (32px)
          so the light content reads as one sheet meeting the header with a curved joint.
        */}
        <div className="bg-surface-nav pt-20">
          <div className="relative overflow-hidden rounded-t-[28px] bg-white shadow-[0_-2px_24px_rgba(0,0,0,0.12)] motion-safe:animate-canvas-rise motion-reduce:animate-none sm:rounded-t-[32px]">
            <Hero />
            <TheProblem />
            <DefaultPath />
            <ForNotFor />
            <WhatYouGet />
            <HowItWorks />
            <WeeklyDemo />
            <WhyMonad />
            <FAQ />
            <FinalCTA />
          </div>
        </div>
      </main>
      <StickyCTA />
    </div>
  );
}
