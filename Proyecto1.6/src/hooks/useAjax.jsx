import { useState, useEffect } from "react";

export const useAjax = (url) => {
  const [estado, setestado] = useState({
    datos: null,
    cargando: true
  });

  const getData = async () => {
      setestado({
        ...estado,
        cargando: true,
      });

      const peticion = await fetch(url);
      const { data } = await peticion.json();

      setestado({
        datos: data,
        cargando: false
      });
    
  };
  useEffect(() => {
    getData();
    console.log(url);
    
  }, [url]);

  return {
    datos: estado.datos,
    cargando: estado.cargando
  }
  
};
