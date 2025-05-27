import React from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';

interface ServiceCardProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
  animationDelay?: string; // e.g., "0.1"
}

// Standard animation classes for elements animated on scroll
const animationBaseClasses = "opacity-0 translate-y-8 transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]";
const animationVisibleClasses = "group-[.is-visible]:opacity-100 group-[.is-visible]:translate-y-0";

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  iconSrc, 
  iconAlt, 
  title, 
  description, 
  linkText = "Dowiedz się więcej", 
  linkHref = "#kontakt",
  animationDelay = "0" // Default to string "0" for parseFloat in hook
}) => {
  return (
    // AnimateOnScroll wrapper, 'group' class enables group-[.is-visible] for children
    // 'h-full' ensures the wrapper takes full height for layout purposes if cards are in a grid.
    <AnimateOnScroll className="group h-full" delay={animationDelay}>
      {/* The card itself receives animation classes */}
      <div className={`p-8 rounded-xl shadow-2xl bg-white flex flex-col items-center text-center h-full transition-all duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:translate-y-[-12px] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15),_0_10px_15px_-8px_rgba(0,0,0,0.1)] ${animationBaseClasses} ${animationVisibleClasses}`}>
        <div className="mb-6">
          <img 
            src={iconSrc} 
            alt={iconAlt} 
            className="mx-auto rounded-full shadow-lg w-16 h-16 sm:w-20 sm:h-20 object-cover" 
            loading="lazy" // Added lazy loading
          />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-700 leading-relaxed flex-grow mb-6">
          {description}
        </p>
        <a href={linkHref} className="mt-auto text-blue-600 font-semibold hover:text-blue-800 group inline-flex items-center"> {/* Inner group for arrow animation */}
          {linkText} <span className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
        </a>
      </div>
    </AnimateOnScroll>
  );
};