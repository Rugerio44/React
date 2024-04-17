import React,{useState} from 'react'

export const MiPrimerEstado = () => {
    
    /*
    let nombre = "Gianni Francesco";
  
    const cambiarNombre = e => {
        nombre = "Jordiani";
    }*/

    const [nombre, setnombre ] = useState("Gianni Francesco");

    const cambiarNombre = (e,nombreFijo) => {
        setnombre(nombreFijo);
    }
    return (
    <div>
        
        <h3>Componente:Mi Primer Estado</h3>
        <div className="espa"></div>
        <strong className='nombrep'>
            {nombre}
        </strong>

        <div className="espa"></div>
        <hr />
        
        <br />

        <button onClick={ e => cambiarNombre(e,"Jordiani Rug")} >Cambiar</button>
        
        <hr />
        <br />
        
        <input type="text" placeholder='Cambia el Nombre' onChange={e => cambiarNombre(e,e.target.value)}/>

    </div>
  )
}
