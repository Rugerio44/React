import { AuroraText } from "../magicui/aurora-text";
import { HoverEffect } from "../ui/card-hover-effect";

const Certificados = () => {
    const projects = [
        {
          title: "Master en React: Aprender ReactJS, Hooks, MERN, NodeJS, JWT+",
          description: "31/03/2025",
          link: "",
        },
        {
          title: "Master en CSS3 Avanzado",
          description:"20-03-2024",
          link: "",
        },
        {
          title: "Curso de Visual Studio Code y GitHub Copilot",
          description:"20/3/2025",
          link: "",
        },
        {
          title: "Introduction to Cybersecurity",
          description:"18/07/2023",
          link: "",
        },
        {
          title: "CCNAv7: Switching, Routing, and Wireless Essentials",
          description:"15/12/2022",
          link: "",
        },
        {
          title: "CCNAv7: Enterprise Networking, Security, and Automation",
          description:"27/04/2023",
          link: "",
        },
      ];  
  return (
    <>
      <div className="certificados__container">
        <h1 className="certificados__title">
          <AuroraText>Certificados</AuroraText>
        </h1>
        <div className="certificados__text">
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Certificados
