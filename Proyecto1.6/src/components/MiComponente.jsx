import React, { useId } from 'react'

export const MiComponente = () => {

    const id = useId() ;

    

  return (
    <div>
        <h1>Hook Use ID</h1>
        <input name="nombre" id={id} placeholder='Nombre' />
    </div>
  )
}
