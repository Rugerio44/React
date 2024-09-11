import React from 'react'

export const EventosComponentes = () => {

  const darclick = (e,nombre) => {
    alert("Le diste click al botton verdad"+" "+nombre);
  }

  function dardobleclick(e){
    console.log("has dado doble click")
  }

  const hasentrado = (e,accion) => {
    console.log("Has "+accion+" en el formulario")
  }

  const estasDentro = e => {
    console.log("Estás dentro del div")
  }
  const estasfuera = e => {
    console.log("Estás fuera del div")
  }


  return (
    <div>
        <h1>Eventos en React</h1>

        <p>
            {/*Evento Click*/}
            <button onClick={e => darclick(e,"gianni")}>Dame Click!</button>
        </p>
    
        <p>
            {/*Evento Doble Click*/}
            <button onDoubleClick ={e => dardobleclick(e)}>Dame doble click!</button>
        </p>

        <div className="caja" 
            onMouseEnter={e => hasentrado(e,"Entrado")}
            onMouseLeave={e => hasentrado(e,"Salio")}    
        >
             {/*Evento Enter*/}
             <p className='caja__texto-caja'>Pasa por aqui porfa</p>
        </div>

        <p>
            <input type="text" 
                   onFocus={estasDentro} 
                   onBlur={estasfuera}
                   placeholder='Introduce tu nombre'
            />

        </p>

    </div>

  )
}

