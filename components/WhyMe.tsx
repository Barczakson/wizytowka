
import React from 'react';
import {
  HiAdjustmentsHorizontal,
  HiOutlineLightBulb,
  HiOutlinePresentationChartLine,
  HiOutlineUserGroup
} from 'react-icons/hi2';



const whyMeData = [
  {
    icon: HiAdjustmentsHorizontal,
    title: "Strategiczne i Analityczne Podejście",
    description: "Każde działanie opieram na dogłębnej analizie danych, rynku i konkurencji, tworząc strategie, które precyzyjnie trafiają w cele Twojego biznesu."
  },
  {
    icon: HiOutlineLightBulb,
    title: "Innowacyjność i Wykorzystanie AI",
    description: "Śledzę najnowsze trendy i inteligentnie wdrażam narzędzia AI, aby optymalizować kampanie, personalizować komunikację i zwiększać efektywność działań."
  },
  {
    icon: HiOutlinePresentationChartLine,
    title: "Transparentność i Mierzalne Rezultaty",
    description: "Otrzymujesz regularne, zrozumiałe raporty z postępów i wyników. Skupiam się na dostarczaniu konkretnych, mierzalnych efektów i realnego ROI."
  },
  {
    icon: HiOutlineUserGroup,
    title: "Partnerska Współpraca",
    description: "Traktuję Twój biznes jak swój własny. Stawiam na otwartą komunikację, elastyczność i budowanie długoterminowych relacji opartych na wzajemnym zaufaniu."
  }
];

export const WhyMe: React.FC = () => {
  return (
    <section id="dlaczego-ja" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Co Wyróżnia Moją Ofertę?</h2>
        <p className="section-subtitle">Partnerstwo oparte na zaufaniu, doświadczeniu i realnych efektach.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {whyMeData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="benefit-item">
                <div className="benefit-icon-placeholder">
                  <IconComponent className="w-5 h-5" style={{ color: '#8a7967' }} />
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};