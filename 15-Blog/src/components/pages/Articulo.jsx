import React, { useState, useEffect } from 'react';
import { Global } from '../../helpers/Global';
import { Peticion } from '../../helpers/Peticion';
import { useParams } from 'react-router-dom';

export const Articulo = () => {
  const [articulo, setArticulo] = useState({});
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    conseguirArticulo();
  }, []);

  const conseguirArticulo = async () => {
    try {
      const { datos, cargando } = await Peticion(Global.url + "/articulos/" + params.id, "GET");

      if (datos && datos.articulo) {
        setArticulo(datos.articulo);
        setCargando(false);
      } else {
        setError("Error al cargar los artículos");
        setCargando(false);
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
      setError("Error fetching articles");
      setCargando(false);
    }
  };

  if (cargando) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="jumbo">
        <div className="imagen-articulo">{/*imagen de la persona*/}
          {articulo.imagen != "default.png" && (
            <img
              className="mask__imagen1"
              src={Global.url + "imagen/" + articulo.imagen}
              alt="Placeholder"
            />
          )}
          {articulo.imagen == "default.png" && (
            <img
              className="mask__imagen1"
              src="https://static.vecteezy.com/system/resources/previews/005/723/771/non_2x/photo-album-icon-image-symbol-or-no-image-flat-design-on-a-white-background-vector.jpg"
              alt="Placeholder"
            />
          )}
        </div>
        <h1>{articulo.titulo}</h1>
        <p><strong>Fecha:</strong> {articulo.fecha} </p>
        <p> {articulo.contenido} </p>
        <button onClick={() => {
          window.history.back();
        }}>Regresar</button>
      </div>
    </>
  );
  
};

export default Articulo;