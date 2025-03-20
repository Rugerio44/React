import React from 'react'
import { NavLink } from 'react-router-dom'

export const Error404 = () => {
  
    return (
      <div className='Error404'>
        <h1 className='Error404__titulo'>Error 404 No se encontró la ruta.</h1>
        <NavLink className='Error404__boton' to='/'>
          <span className='Error404__boton--letter'>Regresar a inicio</span>
        </NavLink>
      </div>
    );
  
}

export default Error404;