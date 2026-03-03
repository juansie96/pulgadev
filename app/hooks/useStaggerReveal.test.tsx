import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { setMatchMedia } from '../test-utils/setMatchMedia';
import { useStaggerReveal } from './useStaggerReveal';

describe('useStaggerReveal', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    act(() => {
      vi.runOnlyPendingTimers();
    });
    vi.useRealTimers();
  });

  it('starts hidden and becomes visible after mount delay', () => {
    setMatchMedia(false);
    const { result } = renderHook(() => useStaggerReveal({ mountDelay: 100 }));

    const initialReveal = result.current.getRevealProps(250);
    expect(initialReveal.className).toBe('opacity-0 translate-y-3');
    expect(initialReveal.style).toMatchObject({
      transitionDelay: '250ms',
    });

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(result.current.getRevealProps(250).className).toBe('opacity-100 translate-y-0');
  });

  it('returns static visible props when reduced motion is preferred', () => {
    setMatchMedia(true);
    const { result } = renderHook(() => useStaggerReveal({ mountDelay: 100 }));

    expect(result.current.getRevealProps(300)).toEqual({
      className: 'opacity-100 translate-y-0',
      style: {},
    });
  });

  it('updates reveal state when reduced motion preference changes after mount', () => {
    const mediaQuery = setMatchMedia(false);
    const { result } = renderHook(() => useStaggerReveal({ mountDelay: 100 }));

    expect(result.current.getRevealProps(300).className).toBe('opacity-0 translate-y-3');

    act(() => {
      mediaQuery.setMatches(true);
    });

    expect(result.current.getRevealProps(300)).toEqual({
      className: 'opacity-100 translate-y-0',
      style: {},
    });
  });
});
