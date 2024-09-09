import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

  const [nombre,setnombre] = useState("Gianni");
  const [pagina,setpagina] = useState(1);
  
  const asignargestor = e => {
    setnombre(e.target.value);
  }

  useEffect(()=>{
    console.log("Vista Gestion Actualizada!!");
  },[nombre,pagina]);
  
  const mostrarmensaje = useCallback(() => {
    console.log("Hola soy el mensaje desde el componente empleados");
  },[pagina]);

  return (
    <div>
        <h1 className='name'>Nombre del Gestor: {nombre}</h1>
        <div className="name__caja">
        <input className='name__input' type="text" onChange={asignargestor} placeholder='Introducir tu nombre' />
        </div>
        <h2 className='name__client'>Listado de empleados:</h2>
        <p className="name__texto">Los Usuarios se gestionan por {nombre} de jsonplaceholder...</p>
        <button onClick={() => { setpagina(1)}}>Página 1</button> 
        <button onClick={() => { setpagina(2)}}>Página 2</button>
        <button onClick={() => { setpagina(3)}}>Página 3</button>
        <Empleados pagina={pagina} mensaje={mostrarmensaje}/>
    </div>
  )
}
