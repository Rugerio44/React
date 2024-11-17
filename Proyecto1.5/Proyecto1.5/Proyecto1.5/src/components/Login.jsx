import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'
import {useNavigate } from 'react-router-dom';

export const Login = () => {

  const {usuario,setusuario} = useContext(PruebaContext);

  const navigate = useNavigate();

  const guardardatos = (e) => {
    e.preventDefault();
    
    let usuario_identificado = {  
      username: e.target.username.value, 
      nombre: e.target.nombre.value,
      apellido: e.target.apellido.value,
      email: e.target.email.value,
    }

    setusuario(usuario_identificado);
    
    e.target.reset();
    navigate('/');

    // Mostrar mensaje de bienvenida al usuario
    alert(`Bienvenido, ${usuario_identificado.username}`);
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
