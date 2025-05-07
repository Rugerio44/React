import './App.css';
import './index.css';
import { Navbar } from './components/Navbar/Navbar';
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import Tecnologias from './components/Tecnologías/Tecnologias';
import AllProyects from './components/Proyects/AllProyects';
import Trayectoria from './components/Trayectoria/Trayectoria';
import Certificados from './components/Certificados/Certificados';

function App() {
  return (
    <>
      {/* Aquí va el navbar que contiene los enlaces de navegación */}
      <Navbar />
      {/* Aquí va el layout que contiene el contenido principal de la página */}
      <div id="home">
        <Layout />
      </div>
      {/*Parte en donde pongo las Tecnologías que uso */}
      <div id="tecnologias">
        <Tecnologias />
      </div>
      {/* Aquí va la sección de "Todos los proyectos" */}
      <div id="proyectos">
        <AllProyects />
      </div>
      {/* Aqui va la seccion de "Trayectoria"*/}
      <div id="trayectoria">
        <Trayectoria />
      </div>
      {/* Aquí va la sección de "Certificados" */}
      <div id="certificados">
        <Certificados />
      </div>
      {/* Aquí va la sección de "Acerca de mí" */}
      <div id="acerca">
        <About />
      </div>
    </>
  );
}

export default App;