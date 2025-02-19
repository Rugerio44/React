import React from 'react'
import { useState } from 'react';
import {useform} from '../../hooks/useform';
import {Peticion} from '../../helpers/Peticion';
import {Global} from '../../helpers/Global';
import { Navigate, useNavigate } from 'react-router-dom';

export const Crear = () => {
  
    const {formulario, enviado,cambiado,limpiarFormulario } = useform();   
    const [resultado, setResultado] = useState("no_enviado");
    const navegar = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const guardarArticulo = async (e) => {

      e.preventDefault();

      //Recoger datos del formulario
      let nuevoArticulo = formulario;
      

      //Guardar evento en el backend
      const {datos} = await Peticion(Global.url +'crear/','POST', nuevoArticulo);

      

      if (datos && datos.status === "success") {
        setResultado("Guardado");

        //subir imagen

        const fileInput = document.querySelector('#file');

        const formdata = new FormData();
        formdata.append('file0', fileInput.files[0]);

        const subida = await Peticion(Global.url +'subir-imagen/'+datos.articulo._id,'POST', formdata,true);

        
        
        if (subida.datos.status === "success") {
          setResultado("Guardado");
          e.target.reset();
          setShowModal(true);
          
          
          
        } else {
          setResultado("Error al guardar");
          e.target.reset();
          setShowModal(true);
          
          
        }
        
      }
      else{
        setResultado("Error al guardar1");  
      }

    };

    const handleCloseModal = () => {
      setShowModal(false);
      navegar("/articulos/", { replace: true });
    };


  return (
    <div className='jumbo'>
      <h1>Crear Articulo</h1>
      <p>Formulario para crear un articulo</p>
      <pre> {JSON.stringify(formulario)} </pre>

      
      <strong> {resultado == "Guardado" ? "Articulo guardado correctamente":""}</strong> 
      <strong> {resultado == "Error al guardar" ? "Articulo guardado correctamente sin imagen":""}</strong>
      <strong> {resultado == "Error al guardar1" ? "Datos ingresados Erroneos1":""}</strong>
      
      {/*Crear el articuloo*/}
      <form className='formulario' onSubmit={guardarArticulo} id="Mi_Formulario" >

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

      {showModal && (
        <div className="modal">
          <div className="modal__contenido">
            <p>Artículo creado correctamente</p>
            <button onClick={handleCloseModal}>Aceptar</button>
          </div>
        </div>
      )}
     
    </div>
  )
}
export default Crear;
