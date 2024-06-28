import React, { useState } from 'react'

export const Tareas = () => {

    const [tareas,setTareas] = useState([]);

    const guardarTareas = e => {
      e.preventDefault();
    }

  return (
    <div className='tarea'>
      <h1 className='tarea__titulo'>Mis Tareas</h1>

        <form action="" className='tarea__form'>
          <input type="text"
                 name="descripcion" 
                 placeholder='Describe la tarea' 
                 className='form__descripcion' />

          <input type="submit" 
                 value="Guardar"
                 className='form__enviar' />
        </form>


    </div>
  )
}
