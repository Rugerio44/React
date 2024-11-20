import React, { useState } from 'react';
import {useform} from '../hooks/useform';

export const MiFormulario = () => {

    const [activeElement, setActiveElement] = useState(null);


    const handleClick = (id) => {
        setActiveElement(id);
      };

    const {formulario,enviado} = useform({});

  return (
    <div className='inicio'>
      <h1 className='inicio__titulo'>Formulario</h1>
      <p className='inicio__subtitulo'>Formulario para guardar datos de un curso</p>

      <p className='inicio__curso'>Curso Guardado</p>
      <pre className='inicio__resultado' >{JSON.stringify(formulario, null, 2)}</pre>

      <form className='inicio__form' onSubmit={enviado}>
        
        <input
          className={`form__dentro ${activeElement === 'titulo' ? 'active' : ''}`}
          type="text"
          name='titulo'
          placeholder='Titulo:'
          onClick={() => handleClick('titulo')}
        />
        <input
          className={`form__dentro ${activeElement === 'anio' ? 'active' : ''}`}
          type="number"
          name='anio'
          placeholder='Año publicación:'
          onClick={() => handleClick('anio')}
        />
        <textarea
          className={`form__dentro ${activeElement === 'descripcion' ? 'active' : ''}`}
          name="descripcion"
          placeholder='Descripcion:'
          onClick={() => handleClick('descripcion')}
        />
        <input
          className={`form__dentro ${activeElement === 'autor' ? 'active' : ''}`}
          type="text"
          name='autor'
          placeholder='Autor:'
          onClick={() => handleClick('autor')}
        />
        <input
          className={`form__dentro ${activeElement === 'email' ? 'active' : ''}`}
          type="email"
          name='email'
          placeholder='Correo:'
          onClick={() => handleClick('email')}
        />
        <button
          className={`form__dentro ${activeElement === 'enviar' ? 'active' : ''}`}
          type="submit"
          onClick={() => handleClick('enviar')}
        >
          Guardar
        </button>
       
      </form>
    </div>
  );
}
