import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Constacto = () => {

  const nombre = useContext(PruebaContext)

  return (
    <div>
      <h1>Contacto</h1>
      <p>Contactame soy <strong>{nombre.nombre}</strong> </p>
      </div>
  )
}
