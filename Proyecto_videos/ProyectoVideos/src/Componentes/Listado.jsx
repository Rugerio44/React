import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState,setlistadoState}) => {


  const [editar,seteditar] = useState(0);

  useEffect(() => {
    console.log("Componentes del listado de peliculas cargado!!!!");
    conseguirPeliculas();
  },[]);


  const conseguirPeliculas = () =>{
    let peliculas = JSON.parse(localStorage.getItem("pelicula"))
    
    setlistadoState(peliculas);
    
    return peliculas;
  }

  const borrarpeli = (id) =>{
    //conseguir peliculas almacenadas
    let peliculas_almacenadas = conseguirPeliculas();

    //filtrar esas peliculas
    let peliculas_filtradas = peliculas_almacenadas.filter(pelicula => pelicula.id !== parseInt(id));
    
    
    //actualizar el listado

    setlistadoState(peliculas_filtradas);

    //actualizar el local storage
    localStorage.setItem("pelicula",JSON.stringify(peliculas_filtradas));

  }

  return (
    <>
       {listadoState.length !== 0 ? (
        listadoState.map(pelicula => (
          <article key={pelicula.id} className="peli-item">
            <p className='id-'>ID: {pelicula.id}</p> 
            <h3 className="title">Nombre: {pelicula.titulo}</h3>
            <p className="description">Descripcion: {pelicula.descripcion}</p>
            <button className="edit" onClick={() => seteditar(editar === pelicula.id ? null : pelicula.id)}>Editar</button>
            <button className="delete" onClick={() => borrarpeli(pelicula.id)}>Borrar</button>
          
            {/*Aparece el Formulario de Editar */}
            {editar == pelicula.id && (
              <Editar pelicula={pelicula}
                      conseguirPeliculas={conseguirPeliculas}
                      seteditar={seteditar} 
                      setlistadoState={setlistadoState}/>
            )}
          </article>
      ))
    ) : (
      <h4>No hay películas para mostrar</h4>
    )}
    </>
  )
}
