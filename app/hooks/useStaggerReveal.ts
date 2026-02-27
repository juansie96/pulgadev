'use client';

import { useCallback, useEffect, useState } from 'react';
import type { CSSProperties } from 'react';

type RevealProps = {
  className: string;
  style: CSSProperties;
};

type UseStaggerRevealOptions = {
  mountDelay?: number;
};

const transitionStyles = {
  transitionProperty: 'opacity, transform',
  transitionDuration: '450ms',
  transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
} as const;

export function useStaggerReveal({ mountDelay = 100 }: UseStaggerRevealOptions = {}) {
  const [isMounted, setIsMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const onChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', onChange);

    const timeoutId = window.setTimeout(() => setIsMounted(true), mountDelay);

    return () => {
      mediaQuery.removeEventListener('change', onChange);
      window.clearTimeout(timeoutId);
    };
  }, [mountDelay]);

  const getRevealProps = useCallback(
    (delay = 0): RevealProps => {
      if (prefersReducedMotion) {
        return {
          className: 'opacity-100 translate-y-0',
          style: {},
        };
      }

      return {
        className: isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
        style: {
          ...transitionStyles,
          transitionDelay: `${delay}ms`,
        },
      };
    },
    [isMounted, prefersReducedMotion],
  );

  return {
    getRevealProps,
  };
}
