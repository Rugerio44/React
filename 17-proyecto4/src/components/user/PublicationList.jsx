import React, { useState } from 'react'
import avatar from '../../assets/img/user.png'
import { useForm } from '../../hooks/useForm';
import { Global } from '../../helpers/Global';
import { useNavigate } from 'react-router-dom';

export const Register = () => {

  const {form, changed } = useForm({});

  const [saved, setSaved] = useState('not_sended');
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();

    //Recoger Datos del form
    let newUser = form;

    //Enviar datos al backend o hacer algo con ellos

    const request = await fetch(Global.url + "user/registro", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await request.json();

    if (data.status === "success") {
      setSaved("saved");
      setTimeout(() => {
        navigate("/login");
      }, 1000); // Redirect after 1 second
    } else {
      setSaved("error");
    }
    
  };


  return (
    <>
      <header className="content__header content__header--public">
        <h1 className="content__title">Registro</h1>
        
      </header>
      <div className="content__posts">

        {saved == 'saved' ? <strong className='alert alert-success'>Usuario Registrado correctamente!!</strong> : ''}
        {saved == 'error' ? <strong className='alert alert-danger'>Usuario No Registrado</strong> : ''}  

        <form action="" className='register-form' onSubmit={saveUser}>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" onChange={changed} required />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Apellido:</label>
            <input type="text" id="lastname" name="lastname" onChange={changed} required />
          </div>

          <div className="form-group">
            <label htmlFor="nick">Nickname:</label>
            <input type="text" id="nickname" name="nickname" onChange={changed} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" onChange={changed} required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" onChange={changed} required />
          </div>

          <input type="submit" value="Registrate" className='btn btn-success'/>

        </form>

      </div>
    </>
  );
}