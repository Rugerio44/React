import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <>
        <h1>Error 4040</h1>
        <strong>Esta Página no existe</strong>
        <hr />
        <Link to="/inicio">Volver al inicio</Link>
    </>
  )
}
