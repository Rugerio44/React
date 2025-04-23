import { AuroraText } from "@/components/magicui/aurora-text";

const About = () => {
  return (
    <>
    <header className="about__header">
        <h1 className="about__title">
          Acerca de <AuroraText>mi</AuroraText>
        </h1>
      </header>
      <div className="about__infoperso">
        <article className="infoperso__bio">
           <p className='bio__info'>Ingeniero en Sistemas con una pasión por la vanguardia tecnológica y la
          innovación.</p> 
          <p className='bio__info'>
          Mi curiosidad natural me impulsa a explorar y profundizar en
          el conocimiento de las tecnologías emergentes, no solo en mi campo de
          especialización, sino también en el ámbito tecnológico en general.</p>
          <p className='bio__info'>
          Comprometido con el crecimiento personal y profesional, dedico mi tiempo
          libre a mantenerme activo físicamente, participando en juegos de fútbol
          americano cada fin de semana. 
          </p>
          <p className='bio__info'> Recientemente, he comenzado a sumergirme
          en el fascinante mundo del anime, lo que refleja mi apertura a nuevas
          experiencias y culturas.
          </p>
        </article>
        <div className="infoperso__data">
          <ul className="infoperso__list">
            <li className="infoperso__option">
              <AuroraText className="infoperso__title">Edad:</AuroraText>
              <span className="infoperso__value">27</span>
            </li>
            <li className="infoperso__option">
              <AuroraText className="infoperso__title">Pais:</AuroraText>
              <span className="infoperso__value">México</span>
            </li>
            <li className="infoperso__option">
              <AuroraText className="infoperso__title">Correo:</AuroraText>
              <span className="infoperso__value">gianni.rugerio@hotmail.com</span>
            </li>
            <li className="infoperso__option">
              <AuroraText className="infoperso__title">Telefono:</AuroraText>
              <span className="infoperso__value">5547078973</span>
            </li>
          </ul>
        </div>

      </div>

    </>
  )
}

export default About
