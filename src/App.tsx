import { ScrollNav } from "./components/ScrollNav";
import { StickyCTA } from "./components/StickyCTA";
import { FAQ } from "./sections/FAQ";
import { FinalCTA } from "./sections/FinalCTA";
import { ForNotFor } from "./sections/ForNotFor";
import { Hero } from "./sections/Hero";
import { HowItWorks } from "./sections/HowItWorks";
import { RealityCheck } from "./sections/RealityCheck";
import { WeeklyDemo } from "./sections/WeeklyDemo";
import { WhatYouGet } from "./sections/WhatYouGet";
import { WhyMonad } from "./sections/WhyMonad";

export default function App() {
  return (
    <>
      <ScrollNav />
      <main className="pb-[calc(5rem+env(safe-area-inset-bottom,0px))] md:pb-0">
        <Hero />
        <RealityCheck />
        <ForNotFor />
        <WhatYouGet />
        <HowItWorks />
        <WeeklyDemo />
        <WhyMonad />
        <FAQ />
        <FinalCTA />
      </main>
      <StickyCTA />
    </>
  );
}
