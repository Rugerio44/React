import { AuroraText } from "../magicui/aurora-text";
import Certificado from "./Certificado";

const Certificados = () => {
  return (
    <>
      {/* Parte de Certificados en general */}
      <div className="certificados__container">
        <h1 className="certificados__title">
          <AuroraText>Certificados</AuroraText>
        </h1>
        <div className="certificados__text">
          <Certificado
            titulo="Master en React: Aprender ReactJS, Hooks, MERN, NodeJS, JWT+"
            imagen="https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2F5992673%2Fcover_image%2Fretina_500x200%2F1005_Design-Patterns-in-React_Cover-4ac39f45a8b10eff8e80b0b54aa11bdd.png"
            pdf="/src/assets/Pdfs/Certificado_React.pdf"
            nombrepdf="Certificado_React.pdf"
          />
          <Certificado
            titulo="Master en CSS3 Avanzado"
            imagen="https://azulschool.net/wp-content/uploads/2022/05/Que-es-y-para-que-sirve-HTML-y-CSS-1.jpg"
            pdf="/src/assets/Pdfs/Diploma de CSS y HTML Avanzado.pdf"
            nombrepdf="Diploma de CSS y HTML Avanzado.pdf"
          />
          <Certificado
            titulo="Curso de Visual Studio Code y GitHub Copilot"
            imagen="https://imgix.datadoghq.com/img/blog/monitor-github-copilot-with-datadog/copilot-hero.png?auto=compress%2Cformat&cs=origin&lossless=true&fit=max&q=75&w=1400&dpr=1"
            pdf="/src/assets/Pdfs/Certificado - Curso de Visual Studio Code y GitHub Copilot.pdf"
            nombrepdf="Certificado - Curso de Visual Studio Code y GitHub Copilot.pdf"
          />
        </div>
        {/* Parte de Certificados de Cisco */}
        <div className="certificados__text2">
          <div className="certificado__title">
            <h1 className="certificado__texto"><AuroraText>Certificados de Cisco</AuroraText></h1>
          </div>
          <div className="certificado__certificados">
            <Certificado
              titulo="Introduction to Cybersecurity"
              imagen="https://wallpapers.com/images/high/cybersecurity-background-adp77z7j8fa5d41w.webp"
              pdf="/src/assets/Pdfs/Introduccionciberseguridad-SC08S_23-3-certificate.pdf"
              nombrepdf="Introduccionciberseguridad-SC08S_23-3-certificate.pdf"
            />
            <Certificado
              titulo="CCNAv7: Switching, Routing, and Wireless Essentials"
              imagen="https://5115875.fs1.hubspotusercontent-na1.net/hub/5115875/hubfs/Blog/Blog_Articulos/Blog_Art%C3%ADculos/Blog_Articulos_2023_Febrero/Blog_Articulos_2023_Febrero_Art24_ALTA/redes-de-alta-velocidad-cuales-son-y-como-funcionan.png?width=950&name=redes-de-alta-velocidad-cuales-son-y-como-funcionan.png"
              pdf="/src/assets/Pdfs/Switching, Routing, and Wireless Essentials.pdf"
              nombrepdf="Switching, Routing, and Wireless Essentials.pdf"
            />
            <Certificado
              titulo="CCNAv7: Enterprise Networking, Security, and Automation"
              imagen="https://www.omb11.com/franquias/2/7243025/editor-html/12166222.webp"
              pdf="/src/assets/Pdfs/CCNAv7 Enterprise Networking, Security, and Automation.pdf"
              nombrepdf="CCNAv7 Enterprise Networking, Security, and Automation.pdf"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificados;
