import React, { useState, useEffect } from 'react';

export const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer>
      <div className="container mx-auto px-6">
        <a href="#" className="footer-logo">
          Adam<span className="footer-logo-span">Barczewski</span>.
        </a>

        <div className="flex justify-center space-x-8 mb-10">
          <a href="#omnie" className="footer-nav-link">O Mnie</a>
          <a href="#uslugi" className="footer-nav-link">Usługi</a>
          <a href="#dlaczego-ja" className="footer-nav-link">Dlaczego Ja?</a>
          <a href="#kontakt" className="footer-nav-link">Kontakt</a>
        </div>

        <div className="flex justify-center space-x-6 mb-10">
          <a href="https://linkedin.com/in/ADAMBARCZEWSKI_MARKETING_LINK" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="footer-social-link">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/>
            </svg>
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>

        <div className="footer-copyright">
          <p>&copy; {currentYear} Adam Barczewski. Wszelkie prawa zastrzeżone.</p>
          <p className="mt-2">Projekt i realizacja z pasją do marketingu cyfrowego.</p>
        </div>
      </div>
    </footer>
  );
};