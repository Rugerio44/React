import React, { useEffect, useState } from 'react'

export const Listado = ({listadoState,setlistadoState}) => {

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
    let peliculas_filtradas = peliculas_almacenadas.filter(pelicula => pelicula.id!== parseInt(id));
    
    
    //actualizar el listado

    setlistadoState(peliculas_filtradas);

    //actualizar el local storage
    localStorage.setItem("pelicula",JSON.stringify(peliculas_filtradas));

  }

  return (
    <>
       {listadoState != null ? (
        listadoState.map(pelicula => (
          <article key={pelicula.id} className="peli-item">
            <p className='id-'>ID: {pelicula.id}</p> 
            <h3 className="title">Nombre: {pelicula.titulo}</h3>
            <p className="description">Descripcion: {pelicula.descripcion}</p>
            <button className="edit">Editar</button>
            <button onClick={borrarpeli(pelicula.id)} className="delete">Borrar</button>
          </article>
      ))
    ) : (
      <h2>No hay películas para mostrar</h2>
    )}
    </>
  )
}
