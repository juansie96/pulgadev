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

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const hiddenClasses = 'opacity-0 translate-y-3';
const visibleClasses = 'opacity-100 translate-y-0';

const transitionStyles = {
  transitionProperty: 'opacity, transform',
  transitionDuration: '450ms',
  transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
} as const;

function getPrefersReducedMotion() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }

  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function subscribeReducedMotionChange(
  mediaQuery: MediaQueryList,
  listener: (event: MediaQueryListEvent) => void,
) {
  if (typeof mediaQuery.addEventListener === 'function') {
    mediaQuery.addEventListener('change', listener);

    return () => {
      mediaQuery.removeEventListener('change', listener);
    };
  }

  mediaQuery.addListener(listener);

  return () => {
    mediaQuery.removeListener(listener);
  };
}

export function useStaggerReveal({ mountDelay = 100 }: UseStaggerRevealOptions = {}) {
  const [isMounted, setIsMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getPrefersReducedMotion);

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') {
      const timeoutId = window.setTimeout(() => setIsMounted(true), mountDelay);
      return () => window.clearTimeout(timeoutId);
    }

    const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);

    const onChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    const unsubscribe = subscribeReducedMotionChange(mediaQuery, onChange);

    const timeoutId = window.setTimeout(() => setIsMounted(true), mountDelay);

    return () => {
      unsubscribe();
      window.clearTimeout(timeoutId);
    };
  }, [mountDelay]);

  const getRevealProps = useCallback(
    (delay = 0): RevealProps => {
      if (prefersReducedMotion) {
        return {
          className: visibleClasses,
          style: {},
        };
      }

      return {
        className: isMounted ? visibleClasses : hiddenClasses,
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
