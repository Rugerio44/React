import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const EjemploComponente = () => {

    const [mostrar,setmostrar] = useState(false);

    const caja = useRef();
    const boton = useRef();

    useLayoutEffect(() => {
        console.log("uselayouteffect Componente Cargado");
        
        
    },[]);

    useEffect(() => {
        console.log("useeffect Componente Cargado");
        
        if(caja.current == null) return
        
        const {bottom} = boton.current.getBoundingClientRect();

        caja.current.style.top = `${bottom + 20}px`;
        caja.current.style.left = `${bottom + 20}px`;

    },[mostrar]);

  return (
    <div>
        <h1>Ejemplo UsEffect y uselayouteffect</h1>

        <button ref={boton} onClick={() => setmostrar(prev => !prev)}>Mostrar mensaje</button>

        {mostrar && (
            <div id='caja' ref={caja}>
                Hola, soy un mensaje 
            </div>
        )}
        

        


    </div>
  )
}
