import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Inicio = () => {

  const {usuario,setusuario} = useContext(PruebaContext)

  return (
    <div>
      <h1>Inicio</h1>
      {
        usuario.nombre && usuario.apellido ? (
          <p>El nombre tuyo es <strong>{usuario.nombre} </strong> y tu apellido es <strong>{usuario.apellido} </strong></p>
        ) : (
          <p>Por favor, Logeate para poder ver el contenido</p>
        )
      }
      
      {/* <p>Este es la página de inicio</p>
      <p>Número de pokemon: <strong>{compartida.id}</strong></p>
      <p>Nombre del pokemon: <strong>{compartida.nombre}</strong></p>
      <p>Soy tipo: <strong>{compartida.tipo}</strong> </p>
      <p>Mi velocidad es de <strong>{compartida.velocidad}</strong></p>
      <p>Y por ultimo mi habilidad principal es: <strong> {compartida.habilidad} </strong></p>
      <br /> */}
    </div>
  )
}
