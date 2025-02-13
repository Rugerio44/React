import React from 'react'
import { useState } from 'react';
import {useform} from '../../hooks/useform';
import {Peticion} from '../../helpers/Peticion';
import {Global} from '../../helpers/Global';

export const Crear = () => {
  
    const {formulario, enviado,cambiado} = useform({});
    const {resultado, setResultado} = useState(false);


    const guardarArticulo = async (e) => {
      e.preventDefault();

      //Recoger datos del formulario
      let nuevoArticulo = formulario;
      console.log("Datos del formulario:", nuevoArticulo);

      //Guardar evento en el backend
      const {datos, cargando} = await Peticion(Global.url +"crear","POST", nuevoArticulo);

      
      if(datos.status === "success"){
        setResultado(true);
        console.log(datos); 
      }
      
      
  }


  return (
    <div className='jumbo'>
      <h1>Crear Articulo</h1>
      <p>Formulario para crear un articulo</p>
      <pre> {JSON.stringify(formulario,null,2)} </pre>
      <strong> {resultado ? "Articulo guardado correctamente": ""}</strong>
      
      {/*Crear el articuloo*/}
      <form className='formulario' onSubmit={guardarArticulo} >

        <div className='formulario__formulario-group'>
           <label htmlFor="titulo" className='formulario__group-titulos'>Titulo</label>
           <input onChange={cambiado} type="text" name='titulo'  className='formulario__group-box'/>
        </div>

        <div className='formulario__formulario-group'>
           <label htmlFor="contenido" className='formulario__group-titulos'>Contenido</label>
           <textarea onChange={cambiado} type="text" name='contenido' className='formulario__group-contenido'/>
        </div>
 
        <div className='formulario__formulario-group'>
           <label htmlFor="file0" className='formulario__group-titulos'>Imagen</label>
           <input onChange={cambiado} type="file" name='file0' id='file' className='formulario__group-boximage' />
        </div>

        <input type="submit" value='Guardar' className='formulario-guardar'/>
        
      </form>
     
    </div>
  )
}
export default Crear;
