import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Gestion } from "./components/Gestion";
import { Tareas } from "./components/Tareas";

function App() {
 

  return (
    <div className="App">
      <header>
        
        {/*Ejerciio con hook UseMemo <Tareas />*/}
        



        {/*Ejercicio con metodo memo para componentes*/}
        <Gestion/>
      </header>

      
    </div>
  );
}

export default App;
