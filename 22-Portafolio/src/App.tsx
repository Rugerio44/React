import './App.css';
import './index.css';
import { Navbar } from './components/Navbar/Navbar';
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import Tecnologias from './components/Tecnologías/Tecnologias';
import AllProyects from './components/Proyects/AllProyects';

function App() {
  return (
    <>
      {/* Aquí va el navbar que contiene los enlaces de navegación */}
      <Navbar />
      {/* Aquí va el layout que contiene el contenido principal de la página */}
      <Layout />
      {/*Parte en donde pongo las Tecnologías que uso */}
      <Tecnologias />
      {/* Aquí va la sección de "Todos los proyectos" */}
      <AllProyects/>
      {/* Aquí va la sección de "Acerca de mí" */}
      <About />
    </>
  );
}

export default App;