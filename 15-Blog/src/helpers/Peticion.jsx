
export const Peticion = async (url,metodo, datosaguardar = '', archivos = false) => {
  let cargando = true;
  let datos = null;

  let opciones = {
    method: "GET",
    
  };

  if (metodo === "GET" || metodo === "DELETE") {
    console.log(opciones.method + " metodo");
    opciones = {
      method: metodo,
    };
  }
  if (metodo === "POST" || metodo === "PUT") {

    let body = "";

    if (archivos) {
      opciones = {
        method: metodo,
        body: datosaguardar,     
      }
    }
    else {
    console.log(metodo + " metodo");
    opciones = {
      method: metodo,
      body : JSON.stringify(datosaguardar),
      headers: {
        "Content-Type": "application/json"
      },     
    }
    }


    
    };
  
    console.log(datosaguardar + " metodo");
    
    
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