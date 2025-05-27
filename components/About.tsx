
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
    <section id="omnie" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Kim Jestem?</h2>
        <p className="section-subtitle">Pasja, strategia i innowacja w jednym miejscu.</p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Image placeholder */}
          <div className="omnie-image-placeholder">
            Zdjęcie
          </div>

          {/* Text content */}
          <div className="omnie-text lg:w-2/3">
            <h3>
              Nazywam się Adam Barczewski. <br className="hidden sm:block" />Twój Dedykowany Ekspert od Marketingu Cyfrowego.
            </h3>
            <p>
              Posiadam wieloletnie doświadczenie w dynamicznym świecie marketingu online. Moją misją jest dostarczanie strategii, które nie tylko wyglądają dobrze na papierze, ale przede wszystkim generują realny wzrost i zwrot z inwestycji dla lokalnych marek. Wierzę w moc danych, kreatywności i technologii (w tym AI), aby tworzyć kampanie, które angażują, konwertują i budują trwałe relacje z klientami.
            </p>
            <p>
              Specjalizuję się w kompleksowych strategiach SEO, zaawansowanych kampaniach reklamowych oraz content marketingu opartym na danych, ze szczególnym uwzględnieniem potrzeb lokalnego rynku. Podchodzę do każdego projektu indywidualnie, z pełnym zaangażowaniem i transparentnością.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
