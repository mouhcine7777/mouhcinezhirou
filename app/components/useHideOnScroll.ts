"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Smart sticky-header behaviour: visible near the top of the page and
 * whenever the user scrolls up, hidden once they scroll down past
 * `threshold` px. Pair with a `translate-y` transform on a `fixed`
 * header — this hook only tracks direction, it doesn't touch layout.
 */
export function useHideOnScroll(threshold = 8) {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastY.current = window.scrollY;

    const update = () => {
      const y = window.scrollY;
      const diff = y - lastY.current;

      if (y <= 0) {
        setVisible(true);
      } else if (Math.abs(diff) > threshold) {
        setVisible(diff < 0);
        lastY.current = y;
      }
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return visible;
}

/**
 * Measures an element's rendered height and keeps it in sync across
 * resizes/content changes — used to size a layout spacer for a
 * `fixed` header so the page below doesn't jump when it appears.
 */
export function useMeasuredHeight<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const set = () => setHeight(el.offsetHeight);
    set();
    const observer = new ResizeObserver(set);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, height };
}
