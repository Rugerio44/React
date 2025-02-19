import React, {useState} from 'react'
import { Global } from '../../helpers/Global';
import { Peticion } from '../../helpers/Peticion';
import { Link } from 'react-router-dom';


export const Listado = ({articulos,setArticulos}) => {

  const [showModal, setShowModal] = useState(false);
  const [articuloId, setArticuloId] = useState(null);

  const eliminar =  async (id) => {
    let {datos} = await Peticion(Global.url+"articulos/"+id,"DELETE",);

    console.log(datos);

    if (datos.status === "success") {
      let articulosActualizados = articulos.filter(articulo => articulo._id != id)
      setArticulos(articulosActualizados);
    }
   
  }

  const handleDeleteClick = (id) => {
    setArticuloId(id);
    setShowModal(true);
  }

  const handleConfirmDelete = () => {
    eliminar(articuloId);
    setShowModal(false);
  }

  const handleCancelDelete = () => {
    setShowModal(false);
    setArticuloId(null);
  }

  const articulo = articulos.find(articulo => articulo._id === articuloId);

  return (
    <>
      {articulos.length >= 1 ? (
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
              <h3 className="title"><Link to={"/articulo/"+articulo._id} className='title__link'> {articulo.titulo}</Link></h3>
              <p className="description">{articulo.contenido}</p>

              <Link to={"/editar/"+ articulo._id} className="edit">Editar</Link>
              <button className="delete" onClick={() => handleDeleteClick(articulo._id)}>Borrar</button>
            </div>
          </article>
        ))
      ) : (
        <h1>No hay articulos</h1>
      )}

      {showModal && (
        <div className="modal">
          <div className="modal__contenido">
            <p>¿Estás seguro de que deseas eliminar permanentemente a "{articulo.titulo}" ?</p>
            <button onClick={handleConfirmDelete}>Sí</button>
            <button onClick={handleCancelDelete}>No</button>
          </div>
        </div>
      )}
    </>
  )
}
