import './App.css';
import { AuroraText } from "@/components/magicui/aurora-text";
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-center">Gianni Francesco</h1>
        <AuroraText className="mt-4 text-2xl text-gray-600">
          Desarrollador web Front End
        </AuroraText>
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
                src="/src/assets/img/bubble-13.png"
                alt=""
                className="formas__img"
              />
            </div>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-center">
          Welcome to the Aurora Text Component!
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          This is a simple example of how to use the Aurora Text component.
        </p>
        <AuroraText className="text-4xl font-bold text-center">
          This is a simple example of how to use the Aurora Text component.
        </AuroraText>
      </div>
    </>
  );
}

export default App;