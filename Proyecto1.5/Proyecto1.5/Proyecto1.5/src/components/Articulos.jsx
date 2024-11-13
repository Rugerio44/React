import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Articulos = () => {

  const nombrepokemon = useContext(PruebaContext);

  return (
    <div>
      <h1>Artículos</h1>
      <p>Bienvenido {nombrepokemon.nombre}</p>
      <p>Esta es la sección de artículos.</p>
      <p>Aquí podrás encontrar productos, servicios, etc.</p>
      <p>¿Necesitas ayuda? Contacta con nosotros.</p>
      <a href="/contacto">Contacto</a>
    </div>
  )
}
