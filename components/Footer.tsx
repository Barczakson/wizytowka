import React, { useState, useEffect } from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';

// Standard animation classes for elements animated on scroll
const animationBaseClasses = "opacity-0 translate-y-8 transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]";
const animationVisibleClasses = "group-[.is-visible]:opacity-100 group-[.is-visible]:translate-y-0";

export const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="container mx-auto px-6 text-center">
        <AnimateOnScroll className="group">
          <a href="#" className={`text-4xl font-extrabold text-white tracking-tight mb-8 inline-block ${animationBaseClasses} ${animationVisibleClasses}`}>
            Adam<span className="text-blue-500">Barczewski</span>.
          </a>
        </AnimateOnScroll>
        
        <AnimateOnScroll className="group" delay="0.1">
          <div className={`flex justify-center space-x-8 mb-10 ${animationBaseClasses} ${animationVisibleClasses}`}>
            <a href="#omnie" className="hover:text-blue-400 transition-colors duration-300 font-medium">O Mnie</a>
            <a href="#uslugi" className="hover:text-blue-400 transition-colors duration-300 font-medium">Usługi</a>
            <a href="#dlaczego-ja" className="hover:text-blue-400 transition-colors duration-300 font-medium">Dlaczego Ja?</a>
            <a href="#kontakt" className="hover:text-blue-400 transition-colors duration-300 font-medium">Kontakt</a>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="group" delay="0.2">
          <div className={`flex justify-center space-x-6 mb-10 ${animationBaseClasses} ${animationVisibleClasses}`}>
            <a href="https://linkedin.com/in/ADAMBARCZEWSKI_MARKETING_LINK" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/>
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
            {/* Add other social icons here if needed */}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="group" delay="0.3">
          <p className={`text-sm ${animationBaseClasses} ${animationVisibleClasses}`}>&copy; {currentYear} Adam Barczewski. Wszelkie prawa zastrzeżone.</p>
        </AnimateOnScroll>
        <AnimateOnScroll className="group" delay="0.4">
          <p className={`text-xs mt-2 opacity-75 ${animationBaseClasses} ${animationVisibleClasses}`}>Projekt i realizacja z pasją do marketingu cyfrowego.</p>
        </AnimateOnScroll>
      </div>
    </footer>
  );
};