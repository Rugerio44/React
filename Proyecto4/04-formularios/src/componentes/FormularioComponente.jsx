import React from 'react'
import { useState } from 'react';

export const FormularioComponente = () => {


  const [usuario,setusuario] = useState({});

  const ConseguirDatosFormularios = e =>{
    
    e.preventDefault();

    let datos = e.target;
    let usuario = {
      nombre: datos.nombre.value,
      apellido: datos.apellido.value,
      genero: datos.genero.value,
      bio: datos.bio.value
    }

    console.log(usuario);
  
    setusuario(usuario);

  };


  return (
    <div>
        
        <h1>Formularios con React</h1>

        <br />

        

        <form onSubmit={ConseguirDatosFormularios}>
          <input type="text"
                 placeholder='nombre'
                 name='nombre'
          />
          <input type="text"
                 placeholder='apellido'
                 name='apellido'
          />
          <select name='genero'>
            <option value="Hombre">Hombre</option>
            <option value="Mujer">Mujer</option> 
          </select>
          <textarea placeholder='Biografia'
                    name='bio'
          ></textarea>
          <input type="submit" value="Enviar" />
        </form>
        <br />
        { usuario.bio && usuario.bio.length >= 1 &&
          (
            <div className="nombreusuario">
            Nombre:{usuario.nombre} <br />
            Apellido:{usuario.apellido} <br />
            Género:{usuario.genero} <br />
            Biografía:{usuario.bio}
            </div>
          )
        }
         

    </div>
  )
}

