
import React from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';
import { SectionTitle } from './SectionTitle'; 

const DecorativeBorderBox: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className }) => {
  return (
    <div className={`relative p-8 group ${className}`}>
      {/* Top-left border piece using Tailwind arbitrary values */}
      <div className="absolute -top-2.5 -left-2.5 w-10 h-10 border-t-[3px] border-l-[3px] border-blue-500 transition-all duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:w-[calc(100%+17px)] group-hover:h-[calc(100%+17px)] group-hover:-top-2 group-hover:-left-2"></div>
      {/* Bottom-right border piece using Tailwind arbitrary values */}
      <div className="absolute -bottom-2.5 -right-2.5 w-10 h-10 border-b-[3px] border-r-[3px] border-blue-500 transition-all duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:w-[calc(100%+17px)] group-hover:h-[calc(100%+17px)] group-hover:-bottom-2 group-hover:-right-2"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Standard animation classes for elements animated on scroll
const animationBaseClasses = "opacity-0 translate-y-8 transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]";
const animationVisibleClasses = "group-[.is-visible]:opacity-100 group-[.is-visible]:translate-y-0";

export const About: React.FC = () => {
  return (
    <section id="omnie" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <AnimateOnScroll className="group"> {/* SectionTitle expects parent to be a group */}
          <SectionTitle title="Kim Jestem?" subtitle="Pasja, strategia i innowacja w jednym miejscu." />
        </AnimateOnScroll>
        
        <div className="flex flex-col lg:flex-row items-center justify-center"> {/* Centering the content */}
          {/* Text content section - now takes full width or a larger portion */}
          <AnimateOnScroll className="group lg:w-full max-w-4xl" delay="0.2"> {/* Animate wrapper for text section, adjusted width */}
            <DecorativeBorderBox className={`${animationBaseClasses} ${animationVisibleClasses}`}> {/* DecorativeBox itself animates */}
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nazywam się Adam Barczewski. <br className="hidden sm:block" />Twój Dedykowany Ekspert od Marketingu Cyfrowego.
              </h3>
              <p className="text-gray-700 mb-5 text-lg leading-relaxed">
                Posiadam wieloletnie doświadczenie w dynamicznym świecie marketingu online. Moją misją jest dostarczanie strategii, które nie tylko wyglądają dobrze na papierze, ale przede wszystkim generują realny wzrost i zwrot z inwestycji dla lokalnych marek. Wierzę w moc danych, kreatywności i technologii (w tym AI), aby tworzyć kampanie, które angażują, konwertują i budują trwałe relacje z klientami.
              </p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Specjalizuję się w kompleksowych strategiach SEO, zaawansowanych kampaniach reklamowych oraz content marketingu opartym na danych, ze szczególnym uwzględnieniem potrzeb lokalnego rynku. Podchodzę do każdego projektu indywidualnie, z pełnym zaangażowaniem i transparentnością.
              </p>
              <a 
                href="#kontakt" 
                className="bg-blue-600 text-white font-semibold px-10 py-3.5 rounded-lg inline-flex items-center text-md transition-all duration-300 ease-in-out hover:bg-blue-700 hover:translate-y-[-3px] hover:shadow-[0_10px_20px_rgba(37,99,235,0.25)]"
              >
                Skontaktuj Się Ze Mną
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 ml-2.5">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </a>
            </DecorativeBorderBox>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};
