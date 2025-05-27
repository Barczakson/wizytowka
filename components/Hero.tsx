
import React from 'react';

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
