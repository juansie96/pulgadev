import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Reveal } from './Reveal';

describe('Reveal', () => {
  it('passes delay to getRevealProps and merges classes/styles', () => {
    const getRevealProps = vi.fn().mockReturnValue({
      className: 'opacity-0 translate-y-3',
      style: {
        transitionDelay: '300ms',
      },
    });

    render(
      <Reveal
        as="a"
        href="#target"
        className="base-class"
        style={{ willChange: 'transform' }}
        delay={300}
        getRevealProps={getRevealProps}
      >
        Go
      </Reveal>,
    );

    const link = screen.getByRole('link', { name: 'Go' });

    expect(getRevealProps).toHaveBeenCalledWith(300);
    expect(link).toHaveClass('base-class');
    expect(link).toHaveClass('opacity-0');
    expect(link).toHaveStyle({ transitionDelay: '300ms', willChange: 'transform' });
    expect(link).toHaveAttribute('href', '#target');
  });
});
