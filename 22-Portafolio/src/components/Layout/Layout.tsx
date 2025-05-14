import { AuroraText } from "@/components/magicui/aurora-text";


const Layout = () => {
    
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen">
        {/* Imagen  */}
        <div className="container__img">
            <img
                src="/src/assets/img/ChatGPT Image 8 may 2025, 03_11_31 p.m..webp"
                alt=""
                className="img__avatar"
            />
        </div>
        <h1 className="text-4xl font-bold text-center main__titulo">Gianni Francesco</h1>
        <AuroraText className='main__title'>Desarrollador web Front End</AuroraText>
        {/*Redes sociales*/}
        <div className="social-icons-container">
            <ul className="social-icons-list">
                <li className="social-icon-item">
                    <a href="https://github.com/Rugerio44" className="social-icon-link">
                        <i className="fab fa-github social-icon"></i>
                    </a>
                    </li>
                    <li className="social-icon-item">
                    <a href="https://wa.me/525547078973" className="social-icon-link">
                        <i className="fab fa-whatsapp social-icon"></i>
                    </a>
                    </li>
                    <li className="social-icon-item">
                    <a href="https://www.linkedin.com/in/gianni-rugerio-lezama/" className="social-icon-link">
                        <i className="fab fa-linkedin-in social-icon"></i>
                    </a>
                    </li>
                    <li className="social-icon-item">
                    <a href="mailto:gianni.rugerio@hotmail.com" className="social-icon-link">
                        <i className="fab fa-google-plus-g social-icon"></i>
                    </a>
                </li>
            </ul>
        </div>
      </div>
      {/* Formas e imágenes del banner */}
      <div className="banner__formas">
        <ul className="formas__lista">
          <li className="formas__item formas__items--forma1">
            <div className="formas__contenedor">
              <img
                src="/src/assets/img/bubble-12.png"
                alt=""
                className="formas__img"
              />
            </div>
          </li>
          <li className="formas__item formas__items--forma2">
            <div className="formas__contenedor">
              <img
                src="/src/assets/img/bubble-13.png"
                alt=""
                className="formas__img"
              />
            </div>
          </li>
          <li className="formas__item formas__items--forma3">
            <div className="formas__contenedor">
              <img
                src="/src/assets/img/bubble-26.png"
                alt=""
                className="formas__img"
              />
            </div>
          </li>
          <li className="formas__item formas__items--forma4">
            <div className="formas__contenedor">
              <img
                src="/src/assets/img/bubble-15.png"
                alt=""
                className="formas__img"
              />
            </div>
          </li>
          <li className="formas__item formas__items--forma5">
            <div className="formas__contenedor">
              <img
                src="/src/assets/img/bubble-16.png"
                alt=""
                className="formas__img"
              />
            </div>
          </li>
          <li className="formas__item formas__items--forma6">
            <div className="formas__contenedor">
              <img
                src="/src/assets/img/bubble-16.png"
                alt=""
                className="formas__img"
              />
            </div>
          </li>
          <li className="formas__item formas__items--forma7">
            <div className="formas__contenedor">
              <img
                src="/src/assets/img/bubble-13.png"
                alt=""
                className="formas__img"
              />
            </div>
          </li>
          <li className="formas__item formas__items--forma8">
            <div className="formas__contenedor">
              <img
                src=""
                alt=""
                className="formas__img"
              />
            </div>
          </li>
        </ul>
      </div>


    </>
  )
}

export default Layout
