import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {
  const [buscar, setBuscar] = useState("");
  const navegar = useNavigate();

  const hacerBusqueda = (e) => {
    e.preventDefault();
    let mi_busqueda = e.target.search_field.value;
    navegar("/buscar/" + mi_busqueda, { replace: true });
    e.target.reset();
  };

  return (
    <aside className="lateral">
      <div className="search">
        <h3 className="title">Buscador</h3>
        <form onSubmit={hacerBusqueda}>
          <input type="text" id="search_field" name="search_field" />
          <input type="submit" id="search" value="Buscar" />
        </form>
      </div>
    </aside>
  );
}; 