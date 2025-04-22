import './App.css';
import './index.css';
import { AuroraText } from "@/components/magicui/aurora-text";
import { Navbar } from './components/Navbar/Navbar';
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <AnimatedGridPattern
        numSquares={200}
        maxOpacity={0.2}
        duration={2}
        repeatDelay={12}
        className={cn(
          "absolute inset-0 h-full w-full",
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "skew-y-12",
          "pointer-events-none",
          "fill-gray-400/30",
          "stroke-gray-400/30"
        )}
      />
      <Navbar />
      <Layout />

      <header className="about__header">
        <h1 className="about__title">
          Acerca de <AuroraText>mi</AuroraText>
        </h1>
      </header>
      <div className="about__infoperso">
        <article className="infoperso__bio">
          Ingeniero en Sistemas con una pasión por la vanguardia tecnológica y la
          innovación. Mi curiosidad natural me impulsa a explorar y profundizar en
          el conocimiento de las tecnologías emergentes, no solo en mi campo de
          especialización, sino también en el ámbito tecnológico en general.
          Comprometido con el crecimiento personal y profesional, dedico mi tiempo
          libre a mantenerme activo físicamente, participando en juegos de fútbol
          americano cada fin de semana. Recientemente, he comenzado a sumergirme
          en el fascinante mundo del anime, lo que refleja mi apertura a nuevas
          experiencias y culturas.
        </article>
        <div className="infoperso__data">
          <ul className="infoperso__list">
            <li className="infoperso__option">
              <span className="infoperso__title">Nombre:</span>
              <span className="infoperso__value">Gianni Francesco</span>
            </li>
          </ul>
        </div>

      </div>
    </>
  );
}

export default App;