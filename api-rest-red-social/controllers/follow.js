const Follow = require("../models/follow");
const User = require("../models/user");

const mongoosePaginate = require("mongoose-pagination");
//Importar servicio 
const followService = require("../services/followUserIds");




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

  const deleteFollow = async (req, res) => {
    try {
      // Recoger el id del usuario
      const userId = req.user.id;
      // Recoger el id del usuario a dejar de seguir
      const followId = req.params.id;
      // Find coincidencias y eliminar
      const followDeleted = await Follow.deleteOne({ user: userId, followed: followId });
  
      if (!followDeleted) {
        return res.status(500).send({
          status: "error",
          message: "Error al dejar de seguir",
        });
      }
  
      return res.status(200).send({
        status: "success",
        message: "El follow se ha eliminado",
        followDeleted: followDeleted,
        user: req.user,
      });
    } catch (error) {
      return res.status(500).send({
        status: "error",
        message: "Error al dejar de seguir",
        error: error.message,
      });
    }
  };
   
  const following = async (req, res) => {
    try {
      // Sacar el id del usuario identificado
      let userId = req.user.id;
      // Comprobar si me llega el id por parametro en url
      if (req.params.id) {
        userId = req.params.id;
      }
      // Comprobar si me llega la pagina por parametro en url
      let page = 1;

      if (req.params.page) {
        page = req.params.page;
      } else {
        page = 1;
      }

      const itemsPerPage = 5;

      const follows = await Follow.find({ user: userId })
        .populate("user followed", "-password -role -create_at -__v -email")
        .skip((page - 1) * itemsPerPage)
        .limit(itemsPerPage)
        .exec();

      const total = await Follow.countDocuments({ user: userId });

      let followUserIds = await followService.followUserIds(req.user.id);

      return res.status(200).send({
        status: "success",
        message: "Listado de usuarios que estoy siguiendo " + req.user.name,
        follows: follows,
        total: total,
        pages: Math.ceil(total / itemsPerPage),
        page : page,
        user_following: followUserIds.following,
        user_follow_me: followUserIds.followers,
        
      });
    } catch (error) {
      return res.status(500).send({
        status: "error",
        message: "Error al obtener los usuarios seguidos",
        error: error.message,
      });
    }
  };

  const followers = async (req, res) => {

    try {
      // Sacar el id del usuario identificado
      let userId = req.user.id;

      // Comprobar si me llega el id por parametro en url
      if (req.params.id) {
        userId = req.params.id;
      }

      // Comprobar si me llega la pagina por parametro en url
      let page = 1;

      if (req.params.page) {
        page = req.params.page;
      } else {
        page = 1;
      }

      const itemsPerPage = 5;

      const follows = await Follow.find({ followed: userId })
        .populate("user followed", "-password -role -create_at -__v -email")
        .skip((page - 1) * itemsPerPage)
        .limit(itemsPerPage)
        .exec();

      const total = await Follow.countDocuments({ followed: userId });

      let followUserIds = await followService.followUserIds(req.user.id);

      return res.status(200).send({
        status: "success",
        message: "Listado de usuarios que me siguen " + req.user.name,
        total: total,
        pages: Math.ceil(total / itemsPerPage),
        page : page,
        follows: follows,
        user_follow_me: followUserIds.followers,
        user_following: followUserIds.following,
        
      });
    } catch (error) {
      return res.status(500).send({
        status: "error",
        message: "Error al obtener los usuarios seguidos",
        error: error.message,
      });
    }
  }

   
  
   
  module.exports = {
    pruebaFollow,
    save,
    deleteFollow,
    following,
    followers,
    
  };
