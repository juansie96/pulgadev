import type { ComponentPropsWithoutRef, CSSProperties, ElementType, ReactNode } from 'react';

type RevealState = {
  className: string;
  style: CSSProperties;
};

type RevealProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  delay?: number;
  getRevealProps: (delay?: number) => RevealState;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>;

export function Reveal<T extends ElementType = 'div'>({
  as,
  children,
  className = '',
  delay = 0,
  getRevealProps,
  ...restProps
}: RevealProps<T>) {
  const Component = as ?? 'div';
  const reveal = getRevealProps(delay);
  const { style: customStyle, ...componentProps } = restProps;

  return (
    <Component
      {...componentProps}
      className={`${className} ${reveal.className}`.trim()}
      style={{ ...(customStyle ?? {}), ...reveal.style }}
    >
      {children}
    </Component>
  );
}
