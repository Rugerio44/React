import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Acerca = () => {

  const tipo = useContext(PruebaContext);

  return (
    <div>
      <h1>Acerca de</h1>
      <p>Soy {tipo.nombre} y soy tipo {tipo.tipo} </p>
      Este es un sitio web creado con React y React Router.
      <br/>
      <br/>
      El código fuente se encuentra en:
      <br/>
      <br/>
      Gracias por visitar mi sitio web!
    </div>
  )
}
