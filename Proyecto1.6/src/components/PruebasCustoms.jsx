import React, { useState } from 'react'
import { useMayus } from '../hooks/useMayus'

export const PruebasCustoms = () => {

    // const [miTexto, setmiTexto] =  useState("Gianni Francesco");

    const {estado,mayusculas, minusculas,normal,original,invertir} = useMayus("Gianni Francesco");

  return (
    <div>
        <h1>Probando componentes personalizados </h1>
        <h2>{estado}</h2>

        <button onClick={mayusculas}>Minusculas</button>
        <button onClick={minusculas}>Minusculas</button>
        <button onClick={ e => normal("Rugerio Lezama")}>Agregar Apellidos</button>
        <button onClick={invertir}>Invertir</button>
        <button onClick={original}>Original</button>
    </div>
  )
}
