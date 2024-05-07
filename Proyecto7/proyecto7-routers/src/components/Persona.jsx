import React from 'react'
import { useParams } from 'react-router-dom'

export const Persona = () => {

  const {nombre,apellido} = useParams();

  return (
    <div>
        <h1>Pagina de Persona</h1>
        {!nombre && <h2>No hay personas que mostrar aqui</h2>}
        {nombre && <h2>Página de Persona: {nombre} {apellido}</h2>}
        <p>Esta es la Página de Persona</p>
    </div>
  )
}
