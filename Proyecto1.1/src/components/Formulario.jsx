import React, { useRef } from 'react'

export const Formulario = () => {


    const nombreValue = useRef();
    const apellidoValue = useRef();
    const emailValue = useRef();
    const miCaja = useRef();
    

    const mostrar = e => {
        e.preventDefault();
        

        console.log(nombreValue.current.value);
        console.log(apellidoValue.current.value);
        console.log(emailValue.current.value);
        
        //mi caja
        
        let {current:caja} = miCaja
        
        
        caja.classList.add("fondoVerde");
        caja.innerHTML = "<h2>Formulario Enviado<h2/>";
    }

  return (
    <div>
        <h1>Formulario con UseRef</h1>

        <form onSubmit={mostrar}>

            <div ref={miCaja} className='micaja'>
                <h2>Pruebas con use ref</h2>
                
            </div>

            <input type="text" placeholder='Nombre' ref={nombreValue} /><br />
            <input type="text" placeholder='Apellido' ref={apellidoValue} /><br />
            <input type="email" placeholder='Email' ref={emailValue} /><br />
            <hr />

            <input type="submit" value="Enviar"/>
        </form>

    </div>
  )
}
 