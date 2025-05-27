import React, { HTMLAttributes } from 'react';

interface AnimateOnScrollProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Marker class for the useScrollAnimation hook, defaults to "animate-on-scroll" */
  markerClass?: string; 
  delay?: string; // e.g., "0.2" for 0.2s
  /** Additional classes for the wrapper, e.g., "group" for enabling group-[] variants on children, or layout classes */
  className?: string; 
}

export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  markerClass = "animate-on-scroll",
  delay,
  className = "", // It's common to pass "group" here for children to use group-[.is-visible]
  ...rest
}) => {
  const dataAttributes: { [key: string]: string } = {};
  if (delay) {
    // The hook expects a number string for parseFloat
    dataAttributes['data-animation-delay'] = delay.endsWith('s') ? delay.slice(0, -1) : delay;
  }

  // The div created by this component will be targeted by useScrollAnimation hook via `markerClass`.
  // When it becomes visible, 'is-visible' class is added to it.
  // Children can then use Tailwind's `group-[.is-visible]:` utilities if `className` includes "group".
  return (
    <div className={`${markerClass} ${className}`.trim()} {...dataAttributes} {...rest}>
      {children}
    </div>
  );
};
