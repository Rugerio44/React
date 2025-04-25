
import { AuroraText } from "../magicui/aurora-text";
import MarqueeComponent from "./MarqueeComponent";
import TecnoInfo from "./TecnoInfo";


const Tecnologias = () => {
 


  return (
    <>
      <section className="acerca__marquee">
        <h1><AuroraText>Tecnologías</AuroraText></h1>
        <div className="marquee__container">
          <div className="marquee__item">
            <MarqueeComponent />
          </div>
          <div className="marquee__item">
            <div className="marquee__info">
              <TecnoInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tecnologias;
