
import React from 'react';
import { HiOutlinePencilSquare, HiOutlineMagnifyingGlass, HiOutlineMegaphone } from 'react-icons/hi2';

const servicesData = [
  {
    icon: HiOutlinePencilSquare,
    title: "Content Marketing & Copywriting AI",
    description: "Tworzenie wartościowych, angażujących treści (artykuły, e-booki, scenariusze) zoptymalizowanych pod SEO i wspieranych przez inteligentne narzędzia AI. Skuteczny copywriting, który sprzedaje."
  },
  {
    icon: HiOutlineMagnifyingGlass,
    title: "Strategiczne SEO i Audyty",
    description: "Kompleksowa optymalizacja on-page i off-page, audyty techniczne SEO, dogłębna analiza słów kluczowych i budowanie autorytetu Twojej strony w wyszukiwarkach."
  },
  {
    icon: HiOutlineMegaphone,
    title: "Kampanie PPC (Google & Meta Ads)",
    description: "Projektowanie i zarządzanie wysoce efektywnymi kampaniami płatnymi. Precyzyjne targetowanie, optymalizacja budżetów i kreacji reklamowych dla maksymalizacji konwersji."
  }
];

export const Services: React.FC = () => {
  return (
    <section id="uslugi" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Kluczowe Usługi dla Twojego Sukcesu</h2>
        <p className="section-subtitle">Strategie marketingowe, które napędzają wzrost i maksymalizują ROI.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="service-card-classic">
                <div className="service-icon-placeholder">
                  <IconComponent className="w-6 h-6" style={{ color: '#8a7967' }} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#kontakt">Dowiedz się więcej</a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};