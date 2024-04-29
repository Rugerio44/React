import React, { useState } from 'react'

export const Buscador = ({listadoState,setlistadoState}) => {

  const[busqueda,setbusqueda] = useState('');

  const buscarpeli = (e) => {
    //Crear estado y actualizarlo 
    setbusqueda(e.target.value);

    //Filtrar para buscar coincidencias
    let peliculaencontrada = listadoState.filter(pelicula =>{
      return pelicula.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
    });

    if(busqueda.length <= 1 || peliculaencontrada <= 0){
      peliculaencontrada = JSON.parse(localStorage.getItem("pelicula"));
    }
    
    
    setlistadoState(peliculaencontrada);
    //Actualizar el listado de peliculas
    //setlistadoState()

  }


  return (
    
        <div className="search">
                <h3 className="title">Buscador: {busqueda}</h3>
                <form>
                    <input type="text" 
                           id="search_field"
                           name='busqueda'
                           autoComplete='off'
                           onChange={buscarpeli}
                    />
                    <button id="search">Buscar</button>
                </form>
        </div>
    
  )
}
