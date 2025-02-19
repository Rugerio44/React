import React from 'react'
import { useState,useEffect } from 'react';
import { Global } from '../../helpers/Global';
import { Peticion } from '../../helpers/Peticion';
import { Listado } from './Listado';
import { useParams } from 'react-router-dom';

export const Busqueda = () => {
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const params = useParams();

  useEffect(() => {
   conseguirArticulos();
   // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  useEffect(() => {
      conseguirArticulos();
  }, [params]);

  const conseguirArticulos = async () => {
    const url = Global.url + "articulos";

    try {
      const { datos, cargando } = await Peticion(
        Global.url + "buscar/" + params.busqueda,
        "GET"
      );

      if (datos.status === "success") {
        setArticulos(datos.articulos);
        
      }else 
      {
        setArticulos([]);
        console.log("Error al cargar los artículos");
      }
      setCargando(false);
    } catch (error) {
      console.error("Error fetching articles:", error);
      setCargando(true);
      console.log("no");
    }
  }
    return (
      <>
        {cargando ? (
          <h1>Cargando...</h1>
        ) : articulos.length >= 1 ? (
          <Listado articulos={articulos} setArticulos={setArticulos} />
        ) : (
          <h1 className='busqueda-error'>No se encontro ninguna coincidencia</h1>
        )}
      </>
    );
  
};
export default Busqueda;