
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  textColor?: string;
  underlineColor?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  textColor = "text-gray-900",
  underlineColor = "bg-blue-600"
}) => {
  // This component expects its direct parent (AnimateOnScroll wrapper) 
  // to have the 'group' class and to receive 'is-visible' when it scrolls into view.
  // The span for the underline uses group-[.is-visible] to animate.
  return (
    <div className="text-center mb-16 md:mb-20">
      <h2 className={`text-4xl md:text-5xl font-extrabold ${textColor} mb-4 relative inline-block`}>
        {title}
        <span
          className={`block w-[70px] h-1 ${underlineColor} mx-auto mt-3 rounded-sm origin-center scale-x-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-[.is-visible]:scale-x-100 group-[.is-visible]:delay-[200ms]`}
        ></span>
      </h2>
      {subtitle && <p className={`text-lg max-w-2xl mx-auto ${textColor === 'text-white' ? 'text-gray-200' : 'text-gray-600'}`}>{subtitle}</p>}
    </div>
  );
};
