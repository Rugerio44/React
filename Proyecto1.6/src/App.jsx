import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MiFormulario } from "./components/MiFormulario";
//import { MiComponente } from "./components/MiComponente";
// import {PruebasCustoms} from './components/PruebasCustoms';

function App() {
  

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
      {/* <MiComponente /> */}
      {/* <PruebasCustoms/> */}
      <MiFormulario/>

    </div>
    
  );
}

export default App;
