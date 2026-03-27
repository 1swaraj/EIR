import { useEffect, useRef, useState } from "react";

export function useReveal<T extends HTMLElement = HTMLDivElement>(options?: {
  threshold?: number;
  rootMargin?: string;
}) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const threshold = options?.threshold ?? 0;
    const rootMargin = options?.rootMargin ?? "0px 0px 12% 0px";

    let done = false;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!done && entry.isIntersecting) finish();
      },
      { threshold, rootMargin }
    );

    function finish() {
      if (done) return;
      done = true;
      setVisible(true);
      obs.disconnect();
    }

    obs.observe(el);

    const rafId = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.top < vh && rect.bottom > 0) finish();
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (!done) obs.disconnect();
    };
  }, [options?.threshold, options?.rootMargin]);

  return { ref, visible };
}
