import React from 'react'
import { Global } from '../../helpers/Global';
import { Peticion } from '../../helpers/Peticion';

export const Listado = ({articulos,setArticulos}) => {

  const eliminar =  async (id) => {
    const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar este artículo permanentemente?");
    if (!confirmacion) {
      return;
    }else {
    let {datos} = await Peticion(Global.url+"articulos/"+id,"DELETE",);

    console.log(datos);

    if (datos.status === "success") {
      let articulosActualizados = articulos.filter(articulo => articulo._id != id)
      setArticulos(articulosActualizados);
    }
   }
  }

  return (
    articulos.length >= 1 ? (
        articulos.map((articulo) => (
          <article key={articulo._id} className="articulo-item">
            <div className="mask">
              {articulo.imagen != "default.png" && <img
                className="mask__imagen"
                src={Global.url+ "imagen/" + articulo.imagen}
                alt="Placeholder"
              />}
              {articulo.imagen == "default.png" && <img
                className="mask__imagen"
                src="https://static.vecteezy.com/system/resources/previews/005/723/771/non_2x/photo-album-icon-image-symbol-or-no-image-flat-design-on-a-white-background-vector.jpg"
                alt="Placeholder"
              />}
            </div>
            <div className="datos">
              <h3 className="title">{articulo.titulo}</h3>
              <p className="description">{articulo.contenido}</p>

              <button className="edit">Editar</button>
              <button className="delete" onClick={ () => {
                eliminar(articulo._id);
              }}>Borrar</button>
            </div>
          </article>
        ))
      ) : (
        <h1>No hay articulos</h1>
      )
  )
}
