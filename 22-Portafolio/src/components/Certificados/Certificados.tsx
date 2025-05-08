import { AuroraText } from "../magicui/aurora-text";
import Certificado from "./Certificado";

const Certificados = () => {
  return (
    <>
      <div className="certificados__container">
        <h1 className="certificados__title">
          <AuroraText>Certificados</AuroraText>
        </h1>
        <div className="certificados__text">
          <Certificado
            titulo="Master en React: Aprender ReactJS, Hooks, MERN, NodeJS, JWT+"
            imagen="https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2F5992673%2Fcover_image%2Fretina_500x200%2F1005_Design-Patterns-in-React_Cover-4ac39f45a8b10eff8e80b0b54aa11bdd.png"
          />
          <Certificado
            titulo="Master en CSS3 Avanzado"
            imagen="https://raw.githubusercontent.com/diegoAlex24/HTML-CSS-examples/master/html-css-logo.jpg"
          />
          <Certificado
            titulo="Certificado de HTML y CSS"
            imagen="/src/assets/img/Certificado_HTML_CSS.png"
          />
        </div>
        <div className="certificados__text">
          <Certificado
            titulo="Master en React: Aprender ReactJS, Hooks, MERN, NodeJS, JWT+"
            imagen="https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2F5992673%2Fcover_image%2Fretina_500x200%2F1005_Design-Patterns-in-React_Cover-4ac39f45a8b10eff8e80b0b54aa11bdd.png"
          />
          <Certificado
            titulo="Master en CSS3 Avanzado"
            imagen="https://raw.githubusercontent.com/diegoAlex24/HTML-CSS-examples/master/html-css-logo.jpg"
          />
          <Certificado
            titulo="Certificado de HTML y CSS"
            imagen="/src/assets/img/Certificado_HTML_CSS.png"
          />
        </div>
      </div>
    </>
  );
};

export default Certificados;
