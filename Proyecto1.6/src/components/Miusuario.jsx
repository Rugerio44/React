import React, { useEffect, useState } from 'react'

export const Miusuario = () => {


  const getId = e => {
    let id = parseInt(e.target.value);
    let url = 'https://reqres.in/api/users/'+id;

    getUsuario(url);
  }

  

  return (
    <div>
        <h1>Mi Usuario</h1>
        <p>Datos del Usuario:</p>
        <p> {usuario.cargando ? "Cargando Perfil" : ""} </p>
        {usuario.datos ? (
        <p>{usuario.datos.first_name} {usuario.datos.last_name} </p>
      ) : (
        <p>No hay Usuarios</p>
      )}
        <input type="number" name='id' onChange={ getId } />
    </div>
    
  
  )
}
