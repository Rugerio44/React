import React from 'react'
import MiComponente from './MiComponente';

export const SegundoComponente = () => {

    const libros = ["Harry Potter","Juego de Tronos", "Clean Code"];
    //const libros = [];
  return (
    <div className='segundo-componente'> 
        <h1 className="listadode-libros">Listado de libros</h1>
        {libros.length >= 1 ? (  
            <ul>
                {
                libros.map((libro) => (
                    <li key={libro}>{libro}</li>
                ))
                }
            </ul>)
            : (
            <p>No hay libros</p>
            )
        } 
    </div>
  );
}

export default SegundoComponente;
