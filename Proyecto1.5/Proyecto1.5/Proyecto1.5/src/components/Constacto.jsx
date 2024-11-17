import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Constacto = () => {

  const nombre = useContext(PruebaContext)

  const {usuario,setusuario} = useContext(PruebaContext)

  return (
    <div>
      <h1>Contacto</h1>
      { usuario.nombre && usuario.email ?(
        <>
        <p>Contactame soy <strong>{usuario.nombre}</strong> </p>
        <p>Mi correo para que me puedas contactar es el siguiente <strong> {usuario.email} </strong></p>
        </>): (
          <p>Para poder contactarme, debes ingresar tus datos en la sección de Login</p>
        ) }
      </div>
  )
}
