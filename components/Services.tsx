
import React from 'react';
import { ServiceCard } from './ServiceCard';
import { AnimateOnScroll } from './AnimateOnScroll';
import { SectionTitle } from './SectionTitle'; // Updated import

const servicesData = [
  {
    iconSrc: "img/icon_service_content_ai.svg",
    iconAlt: "Ikona Content Marketing",
    title: "Content Marketing & Copywriting AI",
    description: "Tworzenie wartościowych, angażujących treści (artykuły, e-booki, scenariusze) zoptymalizowanych pod SEO i wspieranych przez inteligentne narzędzia AI. Skuteczny copywriting, który sprzedaje.",
    animationDelay: "0.1" // Delay for ServiceCard
  },
  {
    iconSrc: "img/icon_service_seo_audits.svg",
    iconAlt: "Ikona SEO",
    title: "Strategiczne SEO i Audyty",
    description: "Kompleksowa optymalizacja on-page i off-page, audyty techniczne SEO, dogłębna analiza słów kluczowych i budowanie autorytetu Twojej strony w wyszukiwarkach.",
    animationDelay: "0.2"
  },
  {
    iconSrc: "img/icon_service_ppc_ads.svg",
    iconAlt: "Ikona PPC",
    title: "Kampanie PPC (Google & Meta Ads)",
    description: "Projektowanie i zarządzanie wysoce efektywnymi kampaniami płatnymi. Precyzyjne targetowanie, optymalizacja budżetów i kreacji reklamowych dla maksymalizacji konwersji.",
    animationDelay: "0.3"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="uslugi" className="py-20 md:py-32 bg-gray-50"> {/* Slightly different bg from page-wrapper */}
      <div className="container mx-auto px-6">
        {/* SectionTitle component relies on its parent AnimateOnScroll having 'group' class for its internal animations */}
        <AnimateOnScroll className="group"> 
          <SectionTitle 
            title="Kluczowe Usługi dla Twojego Sukcesu" 
            subtitle="Strategie marketingowe, które napędzają wzrost i maksymalizują ROI." 
          />
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              iconSrc={service.iconSrc}
              iconAlt={service.iconAlt}
              title={service.title}
              description={service.description}
              animationDelay={service.animationDelay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};