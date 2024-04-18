import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MiComponente from "./MiComponente.jsx";
import { SegundoComponente } from "./segundocomponente.jsx";
import { TercerComponente } from "./TercerComponente.jsx";
import { EventosComponentes } from "./EventosComponentes.jsx";

function App() {
  const [count, setCount] = useState(0);
  const ficha_medica = {
    especialidad: "Cardiología",
    especialidad_especialidad: "Broncología",
    especialidad_especialidad_especialidad: "Pensadología",
    edad: 26,
    alegias:"Ninguna"
  }
  

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/*Cargar el primer componente*/}
      <div className="componentes">
        <hr />
        <EventosComponentes/>
        <hr />
        <TercerComponente
          ficha={ficha_medica}
        />
        <hr />
        <SegundoComponente />
        <hr />
        <MiComponente />
      </div>
    </div>
  );
}

export default App;
