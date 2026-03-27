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

  return (
    <div
      ref={ref}
      className={`min-h-0 min-w-0 transition-[opacity,transform] duration-700 ease-out ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      } ${className}`}
      style={reducedMotion ? undefined : { transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
