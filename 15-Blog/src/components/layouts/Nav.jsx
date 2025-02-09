import React from 'react'
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/Inicio">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="../articulos">Articulos</NavLink>
          </li>
          <li>
            <NavLink to="/crear">Crear</NavLink>
          </li>
          <li>
            <a to="#">Contacto</a>
          </li>
        </ul>
      </nav>
  );
}
