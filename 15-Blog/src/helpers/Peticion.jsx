
export const Peticion = async (url,metodo, datosaguardar = '', archivos = false) => {
  let cargando = true;
  let datos = null;

  let opciones = {
    method: "GET",
    
  };

  if (metodo === "GET" || metodo === "DELETE") {
    
    opciones = {
      method: metodo,
    };
  }
  if (metodo === "POST" || metodo === "PUT") {



    if (archivos) {
      opciones = {
        method: metodo,
        body: datosaguardar,     
      }
    }
    else {
    
    opciones = {
      method: metodo,
      body : JSON.stringify(datosaguardar),
      headers: {
        "Content-Type": "application/json"
      },     
    }
    }


    
    };
  
    
    
    
  try {
    const peticion = await fetch(url, opciones);
      datos = await peticion.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    cargando = false;
  }

  return {
    datos,
    cargando,
  };
};