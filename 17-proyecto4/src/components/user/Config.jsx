import React, { useState } from 'react'

export const Config = () => {

  const [saved, setSaved] = useState('not_saved');

  const updateUser = async (e) => {
    e.preventDefault();
  }

  return (
    <>
      <header className="content__header content__header--public">
        <h1 className="content__title">Configuración</h1>
      </header>

      <div className="content__posts">
        {saved == 'saved' ? <strong className='alert alert-success'>Usuario Registrado correctamente!!</strong> : ''}
        {saved == 'error' ? <strong className='alert alert-danger'>Usuario No Registrado</strong> : ''}  

        <form action="" className='config-form' onSubmit={updateUser}> 
            
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="lastname">Apellido:</label>
              <input type="text" id="lastname" name="lastname" required />
            </div>

            <div className="form-group">
              <label htmlFor="nick">Nickname:</label>
              <input type="text" id="nickname" name="nickname" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electrónico:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña:</label>
              <input type="password" id="password" name="password"required />
            </div>

            <div className="form-group">
              <label htmlFor="file0">Imagen:</label>
              <div className="avatar">
                {/*MOSTRAR IMAGEN  */}
              </div>
              <input type="file" id="image" name="image"/>
              
            </div>
            <br />

            <input type="submit" value="Registrate" className='btn btn-success'/>

        </form>

      </div>
    </>
  );
}
