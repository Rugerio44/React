import React, { useState } from 'react'

export const Buscador = ({listadoState,setlistadoState}) => {

  const[busqueda,setbusqueda] = useState('');
  const[noEncontrado,setnoEncontrado] = useState(false);

  const buscarpeli = (e) => {
    //Crear estado y actualizarlo 
    setbusqueda(e.target.value);

    //Filtrar para buscar coincidencias
    let peliculaencontrada = listadoState.filter(pelicula =>{
      return pelicula.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
    });

    if(busqueda.length <= 1 || peliculaencontrada <= 0){
      peliculaencontrada = JSON.parse(localStorage.getItem("pelicula"));
      setnoEncontrado(true);
    }else{
      setnoEncontrado(false);
    }
    
    
    setlistadoState(peliculaencontrada);
    //Actualizar el listado de peliculas
    


  }


  return (
    
        <div className="search">
                <h3 className="title">Buscador: {busqueda}</h3>
                <span className='no-encontrado'></span>
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
