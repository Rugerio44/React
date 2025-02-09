import React from 'react'

export const Listado = ({articulos,setArticulos}) => {
  return (
    articulos.length >= 1 ? (
        articulos.map((articulo) => (
          <article key={articulo._id} className="articulo-item">
            <div className="mask">
              <img
                className="mask__imagen"
                src="data:image/png;base64,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"
                alt="Placeholder"
              />
            </div>
            <div className="datos">
              <h3 className="title">{articulo.titulo}</h3>
              <p className="description">{articulo.contenido}</p>

              <button className="edit">Editar</button>
              <button className="delete">Borrar</button>
            </div>
          </article>
        ))
      ) : (
        <h1>No hay articulos</h1>
      )
  )
}
