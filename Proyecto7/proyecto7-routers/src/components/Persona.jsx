import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {

  const {nombre,apellido} = useParams();
  const navegar = useNavigate();

  const enviar = (e) => {
    e.preventDefault();
    let nombre = e.target.nombre?.value;
    let apellido = e.target.apellido?.value;
    let url = `/persona/${nombre}/${apellido}`;

    if(nombre.length <= 0 && apellido.length <= 0){
      navegar("/inicio");
    }else if(nombre === "contacto"){
      navegar("/contacto");
    }else{
      navegar(url);
    }

  };

  return (
    <div>
        {!nombre && <h2>No hay personas que mostrar aqui</h2>}
        {nombre && <h2>Página de Persona: {nombre} {apellido}</h2>}

        <p>Esta es la Página de Persona</p>

        <form onSubmit={enviar}>
          <input type="text" name="nombre" placeholder="Nombre" />
          <input type="text" name="apellido" placeholder="Apellido" />
          <input type="submit" name="enviar" value="Enviar" />
        </form>

    </div>
  )
} 



