import React from 'react'

export const MiFormulario = () => {
  return (
    <div>
        <h1>Formulario</h1>
        <p>Formulario para guardar datos de un curso</p>

        <p>Curso Guardado</p>
        

        <form action="">
            <input type="text" name='titulo' placeholder='Titulo:' />
            <input type="number" name='anio' placeholder='Año publicación:' />
            <textarea name="descripcion" id="" placeholder='Descripcion:'/>
            <input type="text" name='autor' placeholder='Autor:' />
            <input type="email" name='email' placeholder='Correo:' />
            <button type="submit" value="Enviar" >Guardar</button>
        </form>
    </div>
  )
}
