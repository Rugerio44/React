import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import avatar from '/src/assets/img/user.png'
import { Global } from '../../helpers/Global';
import { SerializeForm } from '../../helpers/SerializeForm';


export const Config = () => {

  const {auth} = useAuth();

  const [saved, setSaved] = useState('not_saved');

  const updateUser = async (e) => {
    e.preventDefault();

    //Recoger datos del form
    let newDataUser = SerializeForm(e.target);

    //Eliminar campos que no se van a actualizar
    delete newDataUser.file0;

    //Actualizar usuario en la BD

    const request = await fetch(Global.url + 'user/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      },
      body: JSON.stringify(newDataUser)
    });

    const data = await request.json();

    if(data.status == 'success') {
      setSaved('saved');
    } else {
      setSaved('error');
    }

    console.log(data);
    
  }

  return (
    <>
      <header className="content__header content__header--public">
        <h1 className="content__title">Configuración</h1>
      </header>

      <div className="content__posts">
        {saved == 'saved' ? <strong className='alert alert-success'>Usuario Actualizado correctamente!!</strong> : ''}
        {saved == 'error' ? <strong className='alert alert-danger'>Usuario No Registrado</strong> : ''}  

        <form action="" className='config-form' onSubmit={updateUser}> 
            
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" name="name" required defaultValue={auth.name} />
            </div>

            <div className="form-group">
              <label htmlFor="lastname">Apellido:</label>
              <input type="text" id="lastname" name="lastname" defaultValue={auth.lastName}/>
            </div>

            <div className="form-group">
              <label htmlFor="nick">Nickname:</label>
              <input type="text" id="nickname" name="nickname" required defaultValue={auth.nickname} />
            </div>

            <div className="form-group">
              <label htmlFor="biography">Biografía:</label>
              <textarea id="biography" name="biography" defaultValue={auth.biography}></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electrónico:</label>
              <input type="email" id="email" name="email" required defaultValue={auth.email}/>
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña:</label>
              <input type="password" id="password" name="password" required defaultValue={auth.password}/>
            </div>

            

            <div className="form-group">
              <label htmlFor="file0">Imagen:</label>
              <div className="avatar">
                <div className="general-info__container-avatar">
                  {auth.image != 'default.png' && <img src={Global.url + 'user/avatar/' + auth.image} className="container-avatar__img" alt="Foto de perfil"/>}
                  {auth.image == 'default.png' && <img src={avatar} className="container-avatar__img" alt="Foto de perfil"/>}
                </div>
              </div>
              <br />
              <input type="file" id="image" name="image"/>
              
            </div>
            <br />

            <input type="submit" value="Registrate" className='btn btn-success'/>

        </form>

      </div>
    </>
  );
}
