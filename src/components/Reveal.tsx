import { type ReactNode, useEffect, useState } from "react";
import { useReveal } from "../hooks/useReveal";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

function getPrefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [reducedMotion, setReducedMotion] = useState(getPrefersReducedMotion);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const show = visible || reducedMotion;

  const hiddenMotion = "opacity-0 translate-y-7 scale-[0.985]";
  const shownMotion = "opacity-100 translate-y-0 scale-100";
  const hiddenReduced = "opacity-0";
  const shownReduced = "opacity-100";

  return (
    <div
      ref={ref}
      className={`w-full min-h-0 min-w-0 transition-[opacity,transform] duration-[880ms] ease-reveal motion-reduce:duration-200 motion-reduce:transition-opacity ${
        reducedMotion
          ? show
            ? shownReduced
            : hiddenReduced
          : show
            ? shownMotion
            : hiddenMotion
      } ${className}`}
      style={reducedMotion ? undefined : { transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
