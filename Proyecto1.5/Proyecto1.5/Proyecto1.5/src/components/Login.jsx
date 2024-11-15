import React from 'react'

export const Login = () => {

  const guardardatos = (e) => {
    e.preventDefault();
    
    let usuario = {  
      username: e.target.username.value, 
      nombre: e.target.nombre.value,
      apellido: e.target.apellido,
      email: e.target.email.value,
    }

    // Aquí podrías guardar los datos en el contexto o en alguna base de datos
    console.log(usuario);
    e.target.reset(); // Limpiar los inputs al enviar el formulario
  }

  return (
    <div className='Login__inicio' >
      <h1 className='inicio__titulo' >Login</h1>


      <form className='inicio__form' onSubmit={guardardatos}>
        <input className='form__name' type="text" name='username' placeholder="Nombre de Usuario" />
        <input className='form__name' type="text" name='nombre' placeholder="Nombre" />
        <input className='form__name' type="text" name='apellido' placeholder="Apellido" />
        <input className='form__name' type="text" name='email' placeholder="Email" />
        <input className='form__enviar' type="submit" value="Enviar"/>
      </form>


    </div>
  )
}
