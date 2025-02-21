//Acciones de prueba

const pruebaFollow = (req, res) => {
    return res.status(200).send({
      message: "Mensaje enviado desde el Controllers/follow.js"
    });
  };
  
  
  //Exportar la acciones
   
  module.exports = {
    pruebaFollow
  };
