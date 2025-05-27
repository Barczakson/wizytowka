import React, { useState } from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  isButton?: boolean;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick, isButton = false, className = "" }) => {
  if (isButton) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`nav-cta-button ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={`nav-link ${className}`}
    >
      {children}
    </a>
  );
};

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="nav-logo">
          Adam<span className="nav-logo-span">Barczewski</span>.
        </a>
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink href="#omnie">O Mnie</NavLink>
          <NavLink href="#uslugi">Usługi</NavLink>
          <NavLink href="#dlaczego-ja">Dlaczego Ja?</NavLink>
          <NavLink href="#kontakt" isButton>Rozpocznijmy Współpracę</NavLink>
        </div>
        <div className="md:hidden">
          <button
            id="mobile-menu-button"
            aria-label="Otwórz menu"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
            className="text-gray-700 focus:outline-none p-2"
          >
            {isMobileMenuOpen ? (
               <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
               </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute w-full z-40`}
        style={{ backgroundColor: 'rgba(251, 250, 248, 0.95)', backdropFilter: 'blur(8px)', borderTop: '1px solid #e0dcd5', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
      >
        <NavLink href="#omnie" onClick={closeMobileMenu} className="block py-3 px-6 font-medium w-full text-left nav-link">O Mnie</NavLink>
        <NavLink href="#uslugi" onClick={closeMobileMenu} className="block py-3 px-6 font-medium w-full text-left nav-link">Usługi</NavLink>
        <NavLink href="#dlaczego-ja" onClick={closeMobileMenu} className="block py-3 px-6 font-medium w-full text-left nav-link">Dlaczego Ja?</NavLink>
        <div className="p-4">
          <NavLink href="#kontakt" onClick={closeMobileMenu} isButton className="block text-center w-full py-3.5">Rozpocznijmy Współpracę</NavLink>
        </div>
      </div>
    </nav>
  );
};