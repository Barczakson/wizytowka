
import React from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';
import { SectionTitle } from './SectionTitle'; 
import { 
  HiAdjustmentsHorizontal, 
  HiOutlineLightBulb, 
  HiOutlinePresentationChartLine, 
  HiOutlineUserGroup 
} from 'react-icons/hi2';

interface WhyMeItemProps {
  icon: React.ElementType; // Changed to ElementType for React components
  title: string;
  description: string;
  animationDelay?: string; 
}

// Standard animation classes for elements animated on scroll
const animationBaseClasses = "opacity-0 translate-y-8 transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]";
const animationVisibleClasses = "group-[.is-visible]:opacity-100 group-[.is-visible]:translate-y-0";

const WhyMeItem: React.FC<WhyMeItemProps> = ({ icon: IconComponent, title, description, animationDelay = "0" }) => {
  return (
    <AnimateOnScroll className="group h-full" delay={animationDelay}>
      <div className={`p-8 rounded-xl shadow-xl flex items-start hover:shadow-2xl transition-shadow duration-300 bg-[#f9fafb] h-full ${animationBaseClasses} ${animationVisibleClasses}`}>
        <div className="flex-shrink-0 mr-6 text-blue-600 w-12 h-12">
          <IconComponent className="w-full h-full" strokeWidth="1.5" />
        </div>
        <div>
          <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </AnimateOnScroll>
  );
};

const whyMeData = [
  {
    icon: HiAdjustmentsHorizontal,
    title: "Strategiczne i Analityczne Podejście",
    description: "Każde działanie opieram na dogłębnej analizie danych, rynku i konkurencji, tworząc strategie, które precyzyjnie trafiają w cele Twojego biznesu.",
    animationDelay: "0.1"
  },
  {
    icon: HiOutlineLightBulb,
    title: "Innowacyjność i Wykorzystanie AI",
    description: "Śledzę najnowsze trendy i inteligentnie wdrażam narzędzia AI, aby optymalizować kampanie, personalizować komunikację i zwiększać efektywność działań.",
    animationDelay: "0.2"
  },
  {
    icon: HiOutlinePresentationChartLine,
    title: "Transparentność i Mierzalne Rezultaty",
    description: "Otrzymujesz regularne, zrozumiałe raporty z postępów i wyników. Skupiam się na dostarczaniu konkretnych, mierzalnych efektów i realnego ROI.",
    animationDelay: "0.3"
  },
  {
    icon: HiOutlineUserGroup,
    title: "Partnerska Współpraca",
    description: "Traktuję Twój biznes jak swój własny. Stawiam na otwartą komunikację, elastyczność i budowanie długoterminowych relacji opartych na wzajemnym zaufaniu.",
    animationDelay: "0.4"
  }
];

export const WhyMe: React.FC = () => {
  return (
    <section id="dlaczego-ja" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <AnimateOnScroll className="group"> 
          <SectionTitle title="Co Wyróżnia Moją Ofertę?" subtitle="Partnerstwo oparte na zaufaniu, doświadczeniu i realnych efektach." />
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {whyMeData.map((item, index) => (
            <WhyMeItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              animationDelay={item.animationDelay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};