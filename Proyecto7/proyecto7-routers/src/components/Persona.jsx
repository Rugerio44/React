import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {

  const {nombre,apellido} = useParams();
  const navegar = useNavigate();

  const enviar = (e) => {
    e.preventDefault();
    let nombre = e.target.nombre?.value; // Usa el operador opcional de encadenamiento (?.)
    let apellido = e.target.apellido?.value;
    let url = `/persona/${nombre}/${apellido}`;

    console.log(url);
    navegar(url);
  };

  return (
    <div>
        <h1>Pagina de Persona</h1>
        {!nombre && <h2>No hay personas que mostrar aqui</h2>}
        {nombre && <h2>Página de Persona: {nombre} {apellido}</h2>}
        <p>Esta es la Página de Persona</p>

        <form onSubmit={enviar}>
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Apellido" />
          <input type="submit" value="Enviar" />
        </form>

    </div>
  )
}
