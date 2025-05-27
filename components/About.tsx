
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="omnie" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Kim Jestem?</h2>
        <p className="section-subtitle">Pasja, strategia i innowacja w jednym miejscu.</p>

        <div className="max-w-4xl mx-auto">
          {/* Text content */}
          <div className="omnie-text">
            <h3>
              Nazywam się Adam Barczewski. <br className="hidden sm:block" />Twój Dedykowany Ekspert od Marketingu Cyfrowego.
            </h3>
            <p>
              Posiadam wieloletnie doświadczenie w dynamicznym świecie marketingu online. Moją misją jest dostarczanie strategii, które nie tylko wyglądają dobrze na papierze, ale przede wszystkim generują realny wzrost i zwrot z inwestycji dla lokalnych marek. Wierzę w moc danych, kreatywności i technologii (w tym AI), aby tworzyć kampanie, które angażują, konwertują i budują trwałe relacje z klientami.
            </p>
            <p>
              Specjalizuję się w kompleksowych strategiach SEO, zaawansowanych kampaniach reklamowych oraz content marketingu opartym na danych, ze szczególnym uwzględnieniem potrzeb lokalnego rynku. Podchodzę do każdego projektu indywidualnie, z pełnym zaangażowaniem i transparentnością.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
