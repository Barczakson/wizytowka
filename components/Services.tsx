
import React from 'react';

const servicesData = [
  {
    iconSrc: "img/icon_service_content_ai.jpeg",
    iconAlt: "Ikona Content Marketing",
    title: "Content Marketing & Copywriting AI",
    description: "Tworzenie wartościowych, angażujących treści (artykuły, e-booki, scenariusze) zoptymalizowanych pod SEO i wspieranych przez inteligentne narzędzia AI. Skuteczny copywriting, który sprzedaje.",
    animationDelay: "0.1" // Delay for ServiceCard
  },
  {
    iconSrc: "img/icon_service_seo_audits.jpeg",
    iconAlt: "Ikona SEO",
    title: "Strategiczne SEO i Audyty",
    description: "Kompleksowa optymalizacja on-page i off-page, audyty techniczne SEO, dogłębna analiza słów kluczowych i budowanie autorytetu Twojej strony w wyszukiwarkach.",
    animationDelay: "0.2"
  },
  {
    iconSrc: "img/icon_service_ppc_ads.jpeg",
    iconAlt: "Ikona PPC",
    title: "Kampanie PPC (Google & Meta Ads)",
    description: "Projektowanie i zarządzanie wysoce efektywnymi kampaniami płatnymi. Precyzyjne targetowanie, optymalizacja budżetów i kreacji reklamowych dla maksymalizacji konwersji.",
    animationDelay: "0.3"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="uslugi" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Kluczowe Usługi dla Twojego Sukcesu</h2>
        <p className="section-subtitle">Strategie marketingowe, które napędzają wzrost i maksymalizują ROI.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card-classic">
              <div className="service-icon-placeholder">
                Ikona
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#kontakt">Dowiedz się więcej</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};