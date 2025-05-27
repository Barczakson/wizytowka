
import React from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';

// Particle component styling relies on global keyframes defined in index.html
const Particle: React.FC<{ className?: string; animationClass?: string; sizeClass?: string; positionClass?: string; delay?: string }> = ({ className, animationClass, sizeClass, positionClass, delay }) => {
  return (
    <div
      className={`absolute rounded-full bg-white/20 shadow-[0_0_12px_rgba(255,255,255,0.25),_0_0_18px_rgba(255,255,255,0.15)] ${sizeClass} ${positionClass} ${animationClass} ${className}`}
      style={{ animationDelay: delay }} // animation-delay is fine for keyframe animations
    ></div>
  );
};


const HeroParticles: React.FC = () => {
  const particlesData = [
    { size: 'w-1.5 h-1.5', top: 'top-[15%]', left: 'left-[10%]', anim: 'animate-float-A', delay: '-2s' },
    { size: 'w-2.5 h-2.5', top: 'top-[40%]', left: 'left-[85%]', anim: 'animate-float-B', delay: '-5s' },
    { size: 'w-2 h-2', top: 'top-[75%]', left: 'left-[20%]', anim: 'animate-float-C', delay: '-1s' },
    { size: 'w-3 h-3', top: 'top-[5%]', left: 'left-[50%]', anim: 'animate-float-A', delay: '-8s' },
    { size: 'w-[7px] h-[7px]', top: 'top-[90%]', left: 'left-[60%]', anim: 'animate-float-B', delay: '-3s' },
    { size: 'w-[9px] h-[9px]', top: 'top-[25%]', left: 'left-[30%]', anim: 'animate-float-C', delay: '-6s' },
    { size: 'w-[11px] h-[11px]', top: 'top-[60%]', left: 'left-[5%]', anim: 'animate-float-A', delay: '-4s' },
    { size: 'w-[5px] h-[5px]', top: 'top-[50%]', left: 'left-[40%]', anim: 'animate-float-B', delay: '-7s' },
    { size: 'w-2.5 h-2.5', top: 'top-[80%]', left: 'left-[90%]', anim: 'animate-float-C', delay: '0s' },
    { size: 'w-[7px] h-[7px]', top: 'top-[10%]', left: 'left-[70%]', anim: 'animate-float-A', delay: '-9s' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden z-[1]">
      {particlesData.map((p, i) => (
        <Particle
          key={i}
          sizeClass={p.size}
          positionClass={`${p.top} ${p.left}`}
          animationClass={p.anim}
          delay={p.delay}
        />
      ))}
    </div>
  );
};

// Standard animation classes for elements animated on scroll
const animationBaseClasses = "opacity-0 translate-y-8 transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]";
const animationVisibleClasses = "group-[.is-visible]:opacity-100 group-[.is-visible]:translate-y-0";

export const Hero: React.FC = () => {
  return (
    <header className="hero-section">
      <div className="container mx-auto px-6">
        <h1>
          Adam Barczewski <br className="hidden md:block" /> Marketing Cyfrowy dla Lokalnych Marek
        </h1>
        <p>
          Jako strateg marketingu cyfrowego, pomagam lokalnym markom budować silną obecność online i osiągać spektakularne wyniki, które przekładają się na realny wzrost.
        </p>
        <a
          href="https://biznes-wzrost-prezent.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta-button"
        >
          Zobacz Prezentację
        </a>
      </div>
    </header>
  );
};
