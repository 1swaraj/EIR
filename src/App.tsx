import { PageBackground } from "./components/PageBackground";
import { ScrollNav } from "./components/ScrollNav";
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
      <ScrollNav />
      <main className="relative z-10 pb-[calc(5rem+env(safe-area-inset-bottom,0px))] md:pb-0">
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
      </main>
      <StickyCTA />
    </div>
  );
}
