import { AuroraText } from "../magicui/aurora-text";
import { Timeline } from "@/components/ui/timeline";

const Trayectoria = () => {

    const data = [
      {
        title: "2023-2025",
        subtitle: "Liceo EuroAmericano",
        titulo: "Trabajos",
        content: (
          <div>
            <h2 className="mb-4 text-5xl pb-20 font-bold text-white trayectoria__subtitle">
              Desarrollo y Mantenimiento Web 🧑‍💻
            </h2>
            <p className="text-left text-sm p-6 font-normal text-white mb-10 trayectoria__text">
              Diseñé y mantuve su página web a través de WordPress, además
              implementé la aplicación ieduca para optimizar la comunicación y
              gestión de datos escolares, facilitando el acceso a información
              académica y financiera para los padres de familia.
            </p>
          </div>
        ),
      },
      {
        title: "2019-2020",
        subtitle: "Best Buy",
        titulo: "",
        content: (
          <div>
            <h2 className="mb-4 text-5xl pb-20 font-bold text-white trayectoria__subtitle">
              Soporte Técnico y Atención a cliente 💳
            </h2>
            <p className="text-left text-sm font-normal text-white p-10 mb-10 trayectoria__text">
              Soporte a computadoras a nivel básico y atencion a clientes.
            </p>
          </div>
        ),
      },
    ];

        const datas = [
          {
            title: "2017-2023",
            subtitle: "UNITEC",
            titulo: "Estudios",
            content: (
              <div>
                <h2 className="mb-4 text-5xl pb-20 font-bold text-white trayectoria__subtitle">
                        Ingeniería en Sistemas Computacionales
                </h2>
              </div>
            ),
          },
          {
            title: "2024-2025",
            subtitle: "UNITEC",
            titulo: "",
            content: (
              <div>
                <h2 className=" text-5xl pb-10 font-bold text-white trayectoria__subtitle">
                    MBA (Master in Business Administration)
                </h2>
              </div>
            ),
          },
        ];
  return (
    <>
      <div className="trayectoria__container">
        <h1 className="trayectoria__title">
          <AuroraText>Trayectoria</AuroraText>
        </h1>
        <div className="trayectoria__line">
          <div className="relative w-full overflow-clip">
            <Timeline data={data} />
          </div>
          <div className="relative w-full overflow-clip">
            <Timeline data={datas} />
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Trayectoria
