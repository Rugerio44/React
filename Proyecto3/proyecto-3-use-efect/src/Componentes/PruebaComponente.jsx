import React, { useEffect, useState } from 'react'

export const PruebaComponente = () => {
  
  const [usuario, setusuario] = useState("Gianni");

  const [fecha, setfecha] = useState("21-01-21");

  const modusuario = e =>{

    setusuario(e.target.value);
  
  };
  
  const cambiarfecha = e => {
    setfecha(newDate().toLocaleDateString());
  }; 
  
  useEffect(() => {
    console.log("Has cargado el componente");
  });
  
  return (
    <div>
      <h1>El efecto - Hook useEffect</h1>

      <p className='label'>El nombre es: {usuario}</p>
      <p className='label'>La fecha es: {fecha}</p>
      <form>
        <input 
            type="text" 
            onChange={ modusuario} 
            placeholder='Cambiar el nombre'
        />
        <button onClick={cambiarfecha}>Cambiar Fecha</button>
      </form>
    </div>
  )
}
