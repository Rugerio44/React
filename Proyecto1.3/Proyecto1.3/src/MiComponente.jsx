//Importar modulos de react
import React from "react";

//función del componente
const MiComponente = () => {

    let nombre = 'Gianni';
    let web = 'https://rugerio44.github.io/Portafolio/';

    let usuario = {
        nombre: 'Gianni',
        apellido: 'Rugerio',
        web: 'gianni/portafolio'
    };
  return (
    <div className="mi-componente">
      <h2>Componente Creado</h2>
      <h3>Datos del usuario</h3>
      <ul>
        <li>Nombre: <strong>{usuario.nombre}</strong></li>
        <li>Apellido: <strong>{usuario.apellido}</strong></li>
        <li>Web: {usuario.web}</li>
        <li>
            <a href="https://github.com/rugerio44" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
        </li>

      </ul>
      <p>Este primer componente</p>
      <ul>
        <li>
          <a href="https://reactjs.org" target="_blank">
            React
          </a>
        </li>
        <li>
          <a href="https://vitejs.dev" target="_blank">
            Vite
          </a>
        </li>
        <li>
          <a href="https://tailwindcss.com" target="_blank">
            Tailwind CSS
          </a>
        </li>
      </ul>
    </div>
  );
};
export default MiComponente;
