import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';
import { Global } from '../../helpers/Global';
import useAuth from '../../hooks/useAuth';



export const Login = () => {

  const { auth } = useAuth();

  const {form, changed} = useForm({});
  const [saved, setSaved] = useState('not_sended');

  const {setAuth} = useAuth();

  const loginUser = async (e) => {
    e.preventDefault();

    let user2Login = form;

    //Petición al backend
    const request = await fetch(Global.url +'user/login', {
      method: 'POST',
      body: JSON.stringify(user2Login),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await request.json();

    //Persistirn los datos en el navegador
    if (data.status == 'success') {

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));


      setSaved('login')


      setAuth(data.user);

      // Redireccionar al dashboard
      setTimeout(() => {
        window.location.reload ();
      }, 10);


      
    }
    else {
      setSaved('error')
    }
    
  }


  return (
    <>
      <header className="content__header content__header--public">
        <h1 className="content__title">Login </h1>
      </header>
      <div className="content__posts">
        <form className="form-login" onSubmit={loginUser}>

          {saved == 'login' ? <strong className='alert alert-success'>Éxito al iniciar sesión</strong> : ''}
          {saved == 'error' ? <strong className='alert alert-danger'>Usuario o contraseña incorecta</strong> : ''}  

          
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input  type="email" name='email' id="email" className="form-control" placeholder="Correo electrónico" onChange={changed} />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name='password' id="password" className="form-control" placeholder="Contraseña" onChange={changed} />
          </div>

          <input type="submit" className="btn btn-success" value='Iniciar Sesión' />

        </form>
        <br />
        <p>No tienes cuenta? <a href="/registro">Regístrate</a></p>
      </div>
    </>
  );
}
