import { useState, useEffect } from "react";

export const useAjax = (url) => { 

  const [estado, setestado] = useState({
    datos: null,
    cargando: true
  });

  const getUsuario = async(url) => {
    setestado({
      ...estado,
      cargando: true
    });
    
    const peticion = await fetch(url);
    const {data} = await peticion.json();

    setusuario({
      datos: data,
      cargando: false
    });
    console.log(data);
    
    useEffect(() => {
        getUsuario('https://reqres.in/api/users/1');
      }, []);

  }









}