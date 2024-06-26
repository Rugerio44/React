import React, { useRef, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

  const [nombre,setnombre] = useState("");
  
  const asignargestor = e => {
    setnombre(e.target.value);
  }

  console.log("Vista Gestion Actualizada!!");

  return (
    <div>
        <h1 className='name'>Nombre del Gestor: {nombre}</h1>
        <div className="name__caja">
        <input className='name__input' type="text" onChange={asignargestor} placeholder='Introducir tu nombre' />
        </div>
        <h2 className='name__client'>Listado de empleados:</h2>
        <p className="name__texto">Los Usuarios se gestionan por {nombre} de jsonplaceholder...</p>
        <Empleados/>
    </div>
  )
}
