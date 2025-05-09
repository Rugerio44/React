import { cn } from "@/lib/utils";

interface CertificadoProps {
  titulo: string;
  imagen: string;
  pdf?: string;
  nombrepdf?: string;
}

const Certificado = ({ titulo, imagen, pdf , nombrepdf}: CertificadoProps) => {
  return (
    <>
      <div className="max-w-xs w-full group/card card__container group">
        <article
          className={cn(
            "overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4 backdrop-opacity-10 ...",
            // Puedes agregar clases condicionales aquí si es necesario
          )}
          style={{
            backgroundImage: `url("${imagen}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute w-full h-full top-0 left-0 transition duration-700 group-hover/card:bg-black opacity-60"></div>
          <div className="text content">
            <h2 className="certificado__titulo font-bold text-2xl text-gray-50 relative z-10 pt-15 text-shadow-lg/50 transition-transform duration-700 group-hover/card:scale-110">
              {titulo}
            </h2>
            <div className="certificado__caja cursor-pointer">
              <a
                href={pdf}
                className="certificado__descarga relative z-10 transition-transform duration-700 group-hover/card:scale-110"
                download={nombrepdf}
              >
                Descargar PDF
              </a>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Certificado;
