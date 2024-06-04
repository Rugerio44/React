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

        console.log(miCaja);
    }

  return (
    <div>
        <h1>Formulario</h1>

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
