import React, { useEffect, useState } from 'react'
import { AvisoComponente } from './AvisoComponente';
import { AvisoNombre } from './AvisoNombre';

export const PruebaComponente = () => {
  /*Usuario*/   
  const [usuario, setusuario] = useState("Gianni");
  /*Fecha*/
  const [fecha, setfecha] = useState("21-01-21");
  /*MOdificacion de usuario*/
  const modusuario = e =>{

    setusuario(e.target.value);
  
  };
  /*MOdificacion de fecha*/
  const cambiarfecha = e => {
    setfecha(new Date().toLocaleDateString());
  }; 

  const [contador,setcontador] = useState(0);


  //solo una vez solo al cargar el componente
  useEffect(() => {
    console.log("Has cargado el componente o cambios");
  }, []);

  //solo si cambio el usuario
  useEffect(() => {
    setcontador(contador+1);
    console.log("Has modificado el usuario: "+contador+" veces");

  }, [usuario,fecha]);
  
  return (
    <div>
      <h1>El efecto - Hook useEffect</h1>

      <p className={contador > 10 ? 'label label-rojo' : 'label'}>El nombre es: {usuario}</p>
      <p className={contador > 10 ? 'label label-rojo' : 'label'}>La fecha es: {fecha}</p>
      <p>
        {contador <= 45 ? <input 
            type="text" 
            onChange={ modusuario} 
            placeholder='Cambiar el nombre'
            /> : 
            <p className='label'>Limite Superado</p> }
        <button onClick={cambiarfecha}>Cambiar Fecha</button>
      </p>
      {contador >= 20 && "Hemos superado el 20 en el contador"}
      <br />
      {contador >= 40 && <AvisoComponente/> }

      {usuario == "Jordi" && <AvisoNombre/>}
          
      

      


    </div>
  )
}
