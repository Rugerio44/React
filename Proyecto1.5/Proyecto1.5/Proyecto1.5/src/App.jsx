import "./App.css";
import { PruebaContext } from "./context/PruebaContext";
import { AppRouter } from "./routing/AppRouter";


function App() {

  const pokemon = {
    id: 25,
    nombre: "Pikachu",
    tipo: "Electrico",
    velocidad: 100,
    habilidad: "Impactrueno"
  }

  return (
    <div>  

      <PruebaContext.Provider value={pokemon}>
          <AppRouter></AppRouter>
      </PruebaContext.Provider>

    </div>
  );
}

export default App;
