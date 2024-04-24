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
      bio: datos.bio.value,
      enviar: datos.enviar.value
    }
    console.log(usuario);
    setusuario(usuario);
  };

  const cambiarDatos = e => {
    let name_del_input = e.target.name;
    let usuario__para_modificar = usuario;

    //usuario__para_modificar[name_del_input] = e.target.value;

    setusuario(estado_previo => {
      return {
       ...estado_previo,
        [name_del_input]: e.target.value
      }
    });

  };


  return (
    <div>
        
        <h1>Formularios con React</h1>

        <br />

        

        <form onSubmit={ConseguirDatosFormularios}>
          <input type="text"
                 placeholder='nombre'
                 name='nombre'
                 required
                 onChange={cambiarDatos}
          />
          <input type="text"
                 placeholder='apellido'
                 name='apellido'
                 required
                 onChange={cambiarDatos}
          />
          <select name='genero' onChange={cambiarDatos}>
            <option value="Hombre">Hombre</option>
            <option value="Mujer">Mujer</option> 
          </select>
          <textarea placeholder='Biografia'
                    name='bio'
                    onChange={cambiarDatos}
          ></textarea>
          <input type="submit" value="Enviar" name='enviar'/>
        </form>
        <br />
        { usuario.enviar &&
          (
            <div className="nombreusuario">
            <p className='nombreusuario__nombre'>Nombre:  {usuario.nombre}</p> 
            <p className='nombreusuario__apellido'>Apellido:  {usuario.apellido}</p> 
            <p className='nombreusuario__genero'>Género:  {usuario.genero}</p>
            <p className='nombreusuario__bio'>Biografía:  {usuario.bio}</p>
            </div>
          )
        }
         

    </div>
  )
}

