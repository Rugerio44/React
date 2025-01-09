import React, { useEffect, useState } from 'react'
import { useAjax } from '../hooks/useAjax';

export const Miusuario = () => {

  const [url, seturl] = useState("https://reqres.in/api/users/1");
  const {datos, cargando} = useAjax(url);



  const getId = e => {
    let id = parseInt(e.target.value);
    seturl("https://reqres.in/api/users/"+id);
    console.log(id);
    
  }

  

  return (
    <div>
        <h1>Mi Usuario</h1>
        <p>Datos del Usuario:</p>
        <p> {cargando ? "Cargando Perfil" : ""} </p>
        {datos ? (
        <p>{datos.first_name} {datos.last_name} </p>
      ) : (
        <p>No hay Usuarios</p>
      )}
        <input type="number" name='id' onChange={ getId } />
    </div>
   
    
  
  )
}
