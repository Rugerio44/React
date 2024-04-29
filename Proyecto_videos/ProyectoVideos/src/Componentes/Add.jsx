import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Add = ({setlistadoState}) => {

   const tituloComponente = "Añadir Pelicula";

   const [formState, setFormState] = useState({
     titulo: "",
     descripcion: ""
   }); 

   const [pelistate, setpelistate] = useState(null);

   const {titulo, descripcion} = formState;

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
        //Guardar estado 
        setpelistate(pelicula);
        

         //Añadirlo al listado
         setlistadoState(listado => {
          return [...listado, pelicula];
         });

        //Guardar en el almacenamiento local
        GuardarEnStorage("pelicula",pelicula);

        
    
        
   };

  return (
     <div className="add">
                <h3 className="title">{tituloComponente}</h3>

                <strong>
                  {(pelistate && pelistate.titulo && pelistate.descripcion) && "Has creado la película "+ pelistate.titulo}
                </strong>

                <form onSubmit={conseguirdatosform}>
                    <input type="text" 
                           id="titulo" 
                           name='titulo'
                           placeholder="Titulo" 
                           onChange={e => setFormState({...formState, titulo: e.target.value})}
                    />
                    <textarea 
                              id="description"
                              name='descripcion'
                              placeholder="Descripción"
                              onChange={e => setFormState({...formState, descripcion: e.target.value})}
                    ></textarea>
                    {(titulo && descripcion) && 
                      <input type="submit"
                        id="save" 
                        value="Guardar" 
                      />
                    }
                   
                </form>
     </div>
  )
}

