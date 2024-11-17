import { useEffect, useState } from "react";
import "./App.css";
import { PruebaContext } from "./context/PruebaContext";
import { AppRouter } from "./routing/AppRouter";
import { json } from "react-router-dom";

function App() {
  const [usuario, setusuario] = useState({});

  useEffect(() => {
    console.log("Useeffect una vez");
    
    let usuario__local = JSON.parse(localStorage.getItem("usuario"));
    
    setusuario(usuario__local);
  }, []);

  useEffect(() => {
    console.log("Cambio en estado usuario");
    
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario]);

  const pokemon = {
    id: 25,
    nombre: "Pikachu",
    tipo: "Electrico",
    velocidad: 100,
    habilidad: "Impactrueno",
  };

  return (
    <div>
      <PruebaContext.Provider
        value={{
          usuario,
          setusuario,
        }}
      >
        <AppRouter />
      </PruebaContext.Provider>
    </div>
  );
}

export default App;
