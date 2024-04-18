import React, { useEffect } from 'react'

export const AvisoNombre = () => {

    useEffect(() => {
        //Se Monta Componente
        alert("Componente Montado");
        //Se Desmonta
        return () => {
            alert("Componente Desmontado");
        }
    },[]);


  return (
    <div>
        <hr />
        <h1>Hola Jordi Como estas</h1>
        <button onClick={e => {
            alert("Bienvenido")}}>
            Mostrar Saludo</button>
    </div>
  )
}
