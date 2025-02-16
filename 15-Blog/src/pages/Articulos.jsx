import React from 'react'
import { useState,useEffect } from 'react';
import { Global } from '../../helpers/Global';
import { Peticion } from '../../helpers/Peticion';
import { Listado } from './Listado';

export const Articulos = () => {

  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    conseguirArticulos();
  },[])

  const conseguirArticulos = async () => {
    const url = Global.url+"articulos";

    try {
      const {datos,cargando} = await Peticion(Global.url+"articulos","GET")

      if (Array.isArray(datos.articulos)) {
        setArticulos(datos.articulos);
        setCargando(false);
      } else {
        console.log("Error al cargar los artículos");
      }
      
    } catch (error) {
      console.error("Error fetching articles:", error);
    } 
  }

  return (
    <>
      {cargando ? (
        <h1>Cargando...</h1>
      ) : <Listado articulos={articulos} setArticulos={setArticulos} />
    }
    </>
  );
}


export default Articulos;