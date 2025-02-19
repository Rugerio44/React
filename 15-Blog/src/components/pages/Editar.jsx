import React from 'react'
import { useState , useEffect } from 'react';
import {useform} from '../../hooks/useform';
import {Peticion} from '../../helpers/Peticion';
import {Global} from '../../helpers/Global';
import { useNavigate, useParams } from'react-router-dom';


export const Editar = () => {
  
    const {formulario, enviado,cambiado,limpiarFormulario } = useform();
    
    const [resultado, setResultado] = useState("no_enviado");
    const [articulo, setArticulo] = useState({});
    const [showModal, setShowModal] = useState(false);
    const params = useParams();
    const navegar = useNavigate();

    useEffect(() => {
      conseguirArticulo();
    }, []);

    const conseguirArticulo = async () => {
      try {
        const { datos, cargando } = await Peticion(
          Global.url + "/articulos/" + params.id,
          "GET"
        );

        if (datos && datos.articulo) {
          setArticulo(datos.articulo);
          
        } else {
          setError("Error al cargar los artículos");
          
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
        setError("Error fetching articles");
        
      }
    };

    const editarArticulo = async (e) => {
      e.preventDefault();
    
      // Recoger datos del formulario
      let nuevoArticulo = {...articulo,...formulario};
    
      try {
        // Guardar evento en el backend
        const { datos } = await Peticion(Global.url + 'articulos/' + params.id, 'PUT', nuevoArticulo);
  
        if (datos && datos.status === "success") {
          setResultado("Guardado");
          setArticulo(nuevoArticulo);
          // Subir imagen
          const fileInput = document.querySelector('#file');
          if (fileInput.files.length > 0) { 
            const formdata = new FormData();
            formdata.append('file0', fileInput.files[0]);
  
            const subida = await Peticion(Global.url + 'subir-imagen/' + datos.articulo._id, 'POST', formdata, true);
  
            if (subida.datos.status === "success") {
              setResultado("Guardado");
              e.target.reset();
              setShowModal(true); 
            } else {
              setResultado("Error al guardar");
              e.target.reset();
            }
          } else {
            limpiarFormulario();
            e.target.reset();
            setShowModal(true); 
          }
        } else {
          setResultado("Error al guardar1");
        }
      } catch (error) {
        console.error("Error updating article:", error);
        setResultado("Error al guardar");
      }
    };

    const backmenu = (e) => {
      e.preventDefault();
      navegar("/articulos/",{ replace: true });
    };

    const handleCloseModal = () => {
      setShowModal(false);
      navegar("/articulos/", { replace: true });
    };

  return (
    <div className="jumbo">
      <h1>Editar Articulo</h1>
      <p>Editando a {articulo.titulo} </p>

      <pre> {JSON.stringify(formulario)} </pre>

      <strong>
        {" "}
        {resultado == "Guardado" ? "Articulo Editado correctamente" : ""}
      </strong>
      <strong>
        {" "}
        {resultado == "Error al guardar"
          ? "Articulo guardado correctamente sin imagen"
          : ""}
      </strong>
      <strong>
        {" "}
        {resultado == "Error al guardar1" ? "Datos ingresados Erroneos1" : ""}
      </strong>

      {/*Crear el articuloo*/}
      <form className="formulario" onSubmit={editarArticulo} id="Mi_Formulario">
        <div className="formulario__formulario-group">
          <label htmlFor="titulo" className="formulario__group-titulos">
            Titulo
          </label>
          <input
            onChange={cambiado}
            type="text"
            name="titulo"
            className="formulario__group-box"
            defaultValue={articulo.titulo}
          />
        </div>

        <div className="formulario__formulario-group">
          <label htmlFor="contenido" className="formulario__group-titulos">
            Contenido
          </label>
          <textarea
            onChange={cambiado}
            type="text"
            name="contenido"
            className="formulario__group-contenido"
            defaultValue={articulo.titulo}
          />
        </div>

        <div className="formulario__formulario-group">
          <label htmlFor="file0" className="formulario__group-titulos">
            Imagen Actual
          </label>
          <div className="imagen-articuloeditar">
            {/*imagen de la persona*/}
            {articulo.imagen != "default.png" && (
              <img
                className="mask__imagen2"
                src={Global.url + "imagen/" + articulo.imagen}
                alt="Placeholder"
              />
            )}
            {articulo.imagen == "default.png" && (
              <img
                className="mask__imagen2"
                src="https://static.vecteezy.com/system/resources/previews/005/723/771/non_2x/photo-album-icon-image-symbol-or-no-image-flat-design-on-a-white-background-vector.jpg"
                alt="Placeholder"
              />
            )}
          </div>
          <input
            onChange={cambiado}
            type="file"
            name="file0"
            id="file"
            className="formulario__group-boximage"
          />
        </div>
        <div className='botones-editar' >
          <input type="submit" value="Guardar" className="formulario-guardar" />
          <button className='button' onClick={backmenu}> Regresar</button>
        </div>
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
  );
}
export default Editar;
