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
        className={`bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ease-in-out hover:bg-blue-700 hover:translate-y-[-3px] hover:shadow-[0_10px_20px_rgba(37,99,235,0.25)] ${className}`}
      >
        {children}
      </a>
    );
  }

  // Determine if the link should have block styling (typically for mobile menu)
  const isBlockStyle = className.includes("block");

  return (
    <a
      href={href}
      onClick={onClick}
      className={`group text-gray-700 font-semibold relative transition-colors duration-300 ease-in-out hover:text-blue-700 hover:translate-y-[-2px] ${isBlockStyle ? "" : "pb-2"} ${className}`}
    >
      {children}
      <span 
        className={`absolute h-[2.5px] bg-blue-600 transition-all duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)]
          ${isBlockStyle 
            ? "bottom-0 left-6 right-6 origin-left scale-x-0 group-hover:scale-x-100" 
            : "bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-full"
          }`
        }
      ></span>
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
    <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Adam<span className="text-blue-600">Barczewski</span>.
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
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white shadow-xl absolute w-full z-40`}
      >
        <NavLink href="#omnie" onClick={closeMobileMenu} className="block py-3 px-6 hover:bg-gray-50 font-medium border-b border-gray-100 w-full text-left !pb-3">O Mnie</NavLink>
        <NavLink href="#uslugi" onClick={closeMobileMenu} className="block py-3 px-6 hover:bg-gray-50 font-medium border-b border-gray-100 w-full text-left !pb-3">Usługi</NavLink>
        <NavLink href="#dlaczego-ja" onClick={closeMobileMenu} className="block py-3 px-6 hover:bg-gray-50 font-medium w-full text-left !pb-3">Dlaczego Ja?</NavLink>
        <div className="p-4">
          <NavLink href="#kontakt" onClick={closeMobileMenu} isButton className="block text-center w-full py-3.5">Rozpocznijmy Współpracę</NavLink>
        </div>
      </div>
    </nav>
  );
};