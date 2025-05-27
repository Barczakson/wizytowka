
import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyMe } from './components/WhyMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useScrollAnimation } from './hooks/useScrollAnimation';

const App: React.FC = () => {
  useEffect(() => {
    // Global styles like font-family, font-smoothing, body background pattern,
    // and smooth-scroll are now primarily handled in index.html's <style> tag.
    document.documentElement.classList.add('smooth-scroll');
  }, []);

  useScrollAnimation('.animate-on-scroll'); // This hook targets elements with 'animate-on-scroll' class

  return (
    <>
      <div className="fixed inset-0 w-full h-full bg-cover bg-center bg-fixed -z-20 brightness-[0.8] contrast-[1.1]" style={{ backgroundImage: "url('img/fixed_background_main.jpg')" }}></div>
      <div className="relative z-10 bg-[#f7f8fc] text-gray-800"> {/* page-wrapper equivalent */}
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyMe />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;