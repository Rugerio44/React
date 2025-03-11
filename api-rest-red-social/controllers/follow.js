const Follow = require("../models/follow");
const User = require("../models/user");




//Acciones de prueba
const pruebaFollow = (req, res) => {
    return res.status(200).send({
      message: "Mensaje enviado desde el Controllers/follow.js"
    });
  };
  
  const save = async (req, res) => {
    try {
      // Conseguir datos body
      const params = req.body;
  
      // Sacar id del usuario identificado
      const identity = req.user;
  
      // Crear objeto con modelo de follow
      let user2Follow = new Follow({
        user: identity.id,
        followed: params.followed,
      });
  
      // Guardar el follow en BD (usando async/await)
      const followStored = await user2Follow.save();

      return res.status(200).send({
          status: "success",
          identity: req.user,
          follow: followStored,
      });

    } catch (error) {
      return res.status(500).send({
        status: "error",
        message: "Error al guardar el follow",
        error: error.message,
      });
    }
  };

  const deleteFollow = (req, res) => {

    



    return res.status(200).send({
      status: "success",
      message: "Mensaje enviado desde el Controllers/follow.js",
      user: req.user,
    })

  }
  
   
  module.exports = {
    pruebaFollow,
    save,
    deleteFollow,
  };
