import React, { useState } from 'react'

export const Add = () => {

   const titulo = "Añadir Pelicula";

   const [pelistate, setpelistate] = useState({
     titulo: "",
     descripcion: ""
   });

   const conseguirdatosform = e => {
        e.preventDefault();

        //Conseguir Datos del Formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //Crear Objeto
        let pelicula = {
            id: new Date().getTime(),
            titulo: titulo,
            descripcion: descripcion
        }

        setpelistate(pelicula);

        console.log(pelistate);
        

   };

  return (
     <div className="add">
                <h3 className="title">{titulo}</h3>

                {pelistate.titulo} <br />
                {pelistate.descripcion}

                <form onSubmit={conseguirdatosform}>
                    <input type="text" 
                           id="title" 
                           name='titulo'
                           placeholder="Titulo" 
                    />
                    <textarea 
                              id="description"
                              name='descripcion'
                              placeholder="Descripción"
                             
                    ></textarea>
                    <input type="submit"
                           id="save" 
                           value="Guardar" 
                    />
                </form>
     </div>
  )
}
