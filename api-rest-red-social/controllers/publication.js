//Acciones de prueba

const pruebaPublication = (req, res) => {
    return res.status(200).send({
      message: "Mensaje enviado desde el Controllers/Publication.js"
    });
  };
  
  
  //Exportar la acciones
  
  module.exports = {
    pruebaPublication
  };
  