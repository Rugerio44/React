import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Acerca = () => {

  const tipo = useContext(PruebaContext);

  const {usuario,setusuario} = useContext(PruebaContext)

  return (
    <div>
      <h1>Acerca de</h1>
      { usuario.nombre && usuario.email ? (
        <>
        <p>Soy {usuario.nombre} y mi correo es {usuario.email} </p>
        <p>Este es un sitio web creado con React y React Router.</p>

        <p>Me gusta programar</p>

        Gracias por visitar mi sitio web!
        </>
      ): (
        <p>Ingresa al Login para ver el acerca de mi por favor</p>
      )}
    </div>
  )
}
