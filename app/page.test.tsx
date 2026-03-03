import { act, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import Home from './page';
import { setMatchMedia } from './test-utils/setMatchMedia';

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  act(() => {
    vi.runOnlyPendingTimers();
  });
  vi.useRealTimers();
});

describe('Home page', () => {
  it('renders main hero heading', () => {
    setMatchMedia(false);

    render(<Home />);

    expect(
      screen.getByRole('heading', { name: /hi, i'm juan manuel/i }),
    ).toBeInTheDocument();
  });

  it('reveals nav items after mount delay when reduced motion is disabled', () => {
    setMatchMedia(false);

    render(<Home />);
    const aboutLink = screen.getByRole('link', { name: 'About' });
    const navItem = aboutLink.closest('li');

    expect(navItem).toHaveClass('opacity-0');

    act(() => {
      vi.advanceTimersByTime(120);
    });

    expect(navItem).toHaveClass('opacity-100');
  });

  it('renders motion-safe visible states when reduced motion is enabled', () => {
    setMatchMedia(true);

    render(<Home />);

    const aboutLink = screen.getByRole('link', { name: 'About' });
    const navItem = aboutLink.closest('li');

    expect(navItem).toHaveClass('opacity-100');
    expect(navItem).not.toHaveClass('opacity-0');
  });
});
