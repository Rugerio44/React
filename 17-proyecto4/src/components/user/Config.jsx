import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import avatar from '/src/assets/img/user.png';
import { Global } from '../../helpers/Global';
import { SerializeForm } from '../../helpers/SerializeForm';


export const Config = () => {
  const { auth, setAuth } = useAuth();
  const [saved, setSaved] = useState('not_saved');

  const updateUser = async (e) => {
    e.preventDefault();

    //Recoger datos del form
    let newDataUser = SerializeForm(e.target);

    //token
    const token = localStorage.getItem('token');

    //Eliminar campos que no se van a actualizar
    delete newDataUser.file0;

    //Actualizar usuario en la BD

    const request = await fetch(Global.url + 'user/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(newDataUser)
    });

    const data = await request.json();

    if(data.status == 'success' && data.user) {
      delete data.user.password;
      setAuth(data.user);
      setSaved('saved');

      console.log(auth);
      
    } else {
      setSaved('error');
    }
  
    //Subida de imagen
    const fileInput = document.querySelector('#file');

    if (data.status == 'success' && fileInput.files[0]){

      //Recoger la imagen a subir
      const formData = new FormData();
      formData.append('file0', fileInput.files[0]);

      //Peticion para enviar el fechero
      const Uploadrequest = await fetch(Global.url + 'user/upload', {
        method: 'POST',
        headers: {
          'Authorization': token
        },
        body: formData
      });

      const Uploaddata = await Uploadrequest.json();

      if(data.status == 'success' && Uploaddata.user) {
        console.log('Imagen subida correctamente');
        delete Uploaddata.user.password;
        setAuth(Uploaddata.user);
        setSaved('saved');
      } else {
        setSaved('error');
        console.log('Error al subir la imagen');
      }

    }

  };

 

  return (
    <>
      <header className="content__header content__header--public">
        <h1 className="content__title">Configuración</h1>
      </header>

      <div className="content__posts">
        {saved == "saved" ? (
          <strong className="alert alert-success">
            Usuario Actualizado correctamente!!
          </strong>
        ) : (
          ""
        )}
        {saved == "error" ? (
          <strong className="alert alert-danger">Usuario No Registrado</strong>
        ) : (
          ""
        )}

        <form action="" className="config-form" onSubmit={updateUser}>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              defaultValue={auth.name}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Apellido:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              defaultValue={auth.lastName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="nick">Nickname:</label>
            <input
              type="text"
              id="nickname"
              name="nickname"
              required
              defaultValue={auth.nickname}
            />
          </div>

          <div className="form-group">
            <label htmlFor="biography">Biografía:</label>
            <textarea
              id="biography"
              name="biography"
              defaultValue={auth.biography}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              defaultValue={auth.email}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" />
          </div>

          <div className="form-group">
            <label htmlFor="file0">Imagen:</label>
            <div className="avatar">
              <div className="general-info__container-avatar">
                {auth.image != "default.png" && (
                  <img
                    src={Global.url + "user/avatar/" + auth.image}
                    className="container-avatar__img"
                    alt="Foto de perfil"
                  />
                )}
                {auth.image == "default.png" && (
                  <img
                    src={avatar}
                    className="container-avatar__img"
                    alt="Foto de perfil"
                  />
                )}
              </div>
            </div>
            <br />
            <input type="file" id="file" name="file0" />
          </div>
          <br />

          <input type="submit" value="Registrate" className="btn btn-success" />
        </form>
      </div>
    </>
  );
};
