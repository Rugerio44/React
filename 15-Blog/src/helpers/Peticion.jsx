
export const Peticion = async (url, metodo, datosaguardar = '') => {
  let cargando = true;
  let datos = null;

  let opciones = {
    method: "GET",
    
  };

  if (metodo === "GET" || metodo === "DELETE") {
    console.log(opciones.method + "metodo");
    opciones = {
      method: metodo,
    };
  }
  if (metodo === "POST" || metodo === "PUT") {
    opciones = {
      method: metodo,
      body: JSON.stringify(datosaguardar),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
  

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