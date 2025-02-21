
//Acciones de prueba

const pruebaUser = (req, res) => {
  return res.status(200).send({
    message: "Mensaje enviado desde el Controllers/user.js"
  });
};


//Exportar la acciones

module.exports = {
  prueba
};
