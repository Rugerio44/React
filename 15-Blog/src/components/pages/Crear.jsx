import React from 'react'
import { useState } from 'react';
import {useform} from '../../hooks/useform';
import {Peticion} from '../../helpers/Peticion';
import {Global} from '../../helpers/Global';

export const Crear = () => {
  
    const {formulario, enviado,cambiado,limpiarFormulario } = useform();
    
    const [resultado, setResultado] = useState("no_enviado");

    const guardarArticulo = async (e) => {

      

      e.preventDefault();

      //Recoger datos del formulario
      let nuevoArticulo = formulario;
      console.log("Datos del formulario:", nuevoArticulo);

      //Guardar evento en el backend
      const {datos, cargando} = await Peticion(Global.url +'crear/','POST', nuevoArticulo);

      
      if (datos && datos.status === "success") {
        setResultado("Guardado");

        //subir imagen

        const fileInput = document.querySelector('# file');

        




        limpiarFormulario();
      }
      else{
        setResultado("Error al guardar");
        
      }
       
      
    };


  return (
    <div className='jumbo'>
      <h1>Crear Articulo</h1>
      <p>Formulario para crear un articulo</p>
      <pre> {JSON.stringify(formulario)} </pre>

      
      <strong> {resultado == "Guardado" ? "Articulo guardado correctamente":""}</strong> 
      <strong> {resultado == "Error al guardar" ? "Faltan Datos":""}</strong>
      
      {/*Crear el articuloo*/}
      <form className='formulario' onSubmit={guardarArticulo} >

        <div className='formulario__formulario-group'>
           <label htmlFor="titulo" className='formulario__group-titulos'>Titulo</label>
           <input onChange={cambiado} type="text" name='titulo'  className='formulario__group-box' placeholder='Titulo del blog (Min:5 letras)'/>
        </div>

        <div className='formulario__formulario-group'>
           <label htmlFor="contenido" className='formulario__group-titulos'>Contenido</label>
           <textarea onChange={cambiado} type="text" name='contenido' className='formulario__group-contenido'placeholder='Contenido del blog'/>
        </div>
 
        <div className='formulario__formulario-group'>
           <label htmlFor="file0" className='formulario__group-titulos'>Imagen</label>
           <input onChange={cambiado} type="file" name='file0' id='file' className='formulario__group-boximage' placeholder='imagen' />
        </div>

        <input type="submit" value='Guardar' className='formulario-guardar'/>
        
      </form>
     
    </div>
  )
}
export default Crear;
