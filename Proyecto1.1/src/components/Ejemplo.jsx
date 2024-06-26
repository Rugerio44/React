import React, { useEffect, useRef, useState } from 'react'

export const Ejemplo = () => {

  const [numeroSaludos,setnumeroSaludos]= useState(0);
  const saludosenCola = useRef(numeroSaludos);

  useEffect(() => {
    saludosenCola.current = numeroSaludos;
    setTimeout(() => {
      console.log("Saludos en la cola:"+saludosenCola.current);
    }, 2000)
  },[numeroSaludos]);
  

  const enviarsaludo = e =>{
    setnumeroSaludos(numeroSaludos+1);
  
    e.preventDefault();
    if(numeroSaludos === 10){
      setnumeroSaludos(0);
    }
  }


  return (
    <div>
        <h1>pagina de Ejemplo</h1>
        
        <h2>Saludos Enviados {numeroSaludos} </h2>

        <button onClick={enviarsaludo}>Enviar Saludo</button>
    </div>
  )
}
