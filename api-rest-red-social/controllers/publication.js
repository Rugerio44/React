//Acciones de prueba
const publication = require("../models/publication");
const publications = require("../models/publication");
const fs = require("fs");
const path = require("path");
//Importar servicios
const followUserIds = require("../services/followUserIds");

const pruebaPublication = (req, res) => {
    return res.status(200).send({
      message: "Mensaje enviado desde el Controllers/Publication.js"
    });
  };


  const save = async (req, res) => {
    //Recoger los parametros de la petición
    const params = req.body;
  
    //Si no me llega dar respuesta negativa
    if (!params.title) {
      return res.status(400).json({
        status: "error",
        message: "Falta el contenido de la publicación",
        
      });
    }
  
    try {
      //Crear un objeto de la publicación
      let newPublication = new publications(params);
      newPublication.user = req.user.id;
  
      //Guardar la publicación en la BD
      const publicationStored = await newPublication.save();
  
      return res.status(200).json({
        status: "success",
        message: "Publicación guardada correctamente",
        publicationStored,
      });
    } catch (error) {
      return res.status(500).json({
        status: "error",
        message: "Error al guardar la publicación",
        error: error.message
      });
    }
  };

  const details = async (req,res) => {
    //Sacar id de publicacion de la url
    publicationId = req.params.id;

    try {
      const publicationStored = await publications.findById(publicationId);
  
      if (!publicationStored) {
        return res.status(404).json({
          status: "error",
          message: "No existe la publicación"
        });
      }
  
      return res.status(200).json({
        status: "success",
        message: "Detalles de la publicación",
        publication: publicationStored
      });
    } catch (error) {
      return res.status(500).json({
        status: "error",
        message: "Error en la petición",
        error: error.message
      });
    }
  };

  const remove = async (req, res) => {
    // Sacar id de publicacion de la url
    const publicationId = req.params.id;
  
    try {
      const result = await publications.deleteOne({ "user": req.user.id, "_id": publicationId });
  
      if (result.deletedCount === 0) {
        return res.status(404).json({
          status: "error",
          message: "No se encontró la publicación para eliminar"
        });
      }
  
      return res.status(200).json({
        status: "success",
        message: "Publicación eliminada correctamente",
        publicationRemoved: publicationId,
        user: req.user.id,
      });
    } catch (error) {
      return res.status(500).json({
        status: "error",
        message: "Error al borrar la publicación",
        error: error.message
      });
    }
  };

  const user = async (req, res) => {
    const userId = req.params.id;
    let page = 1;
  
    if (req.params.page) {
      page = req.params.page;
    }
  
    const itemsPerPage = 5;
  
    try {
      const total = await publications.countDocuments({ user: userId });
      const publicationsList = await publications.find({ user: userId })
        .sort("-created_at")
        .populate("user", "-password -__v -role -email")
        .skip((page - 1) * itemsPerPage)
        .limit(itemsPerPage);
  
      return res.status(200).json({
        status: "success",
        message: "Publicaciones del usuario",
        page,
        total,
        pages: Math.ceil(total / itemsPerPage),
        publications: publicationsList,
      });
    } catch (error) {
      return res.status(500).json({
        status: "error",
        message: "Error en la petición",
        error: error.message
      });
    }
  };

  const upload = async (req, res) => {

    //Sacar publication id
    const publicationId = req.params.id;
  
    // Comprobar si llega el fichero
    if (!req.file) {
      return res.status(404).send({
        status: "error",
        message: "Imagen no subida",
      });
    }
    //Conseguir el nombre del archivo
    let image = req.file.originalname;
  
    //Sacar la extension del archivo
    const imageSplit = image.split("\.");
    const extension = imageSplit[1];
   
    // Comprobar la extensión (solo imágenes permitidas)
    if (extension != "png" && extension != "jpg" && extension != "jpeg" && extension != "gif") {
      const filePath = req.file.path;
  
      // Eliminar el archivo no válido
      fs.unlink(filePath, (err) => {
        if (err) {
          return res.status(500).send({
            status: "error",
            message: "Error al eliminar el archivo no válido",
          });
        }
  
        return res.status(400).send({
          status: "error",
          message: "Extensión del archivo no válida",
        });
      });
  
    } else {
      try {
        const PublicationUpdated = await publication.findByIdAndUpdate({user: req.user.id, _id: publicationId }, { file: req.file.filename }, { new: true });
        if (!PublicationUpdated) {
          return res.status(500).send({
            status: "error",
            message: "Error al guardar la imagen del usuario",
          });
        }
  
        return res.status(200).send({
          status: "success",
          message: "Imagen subida correctamente",
          user: PublicationUpdated,
          file: req.file,
        });
      } catch (error) {
        return res.status(500).send({
          status: "error",
          message: "Error al guardar la imagen del usuario",
          error: error.message,
        });
      }
    }
  };

  const media = (req, res) => {
  
    //Sacar el parametro de la url 
    const file = req.params.file 
  
    //Montar el path real de la imagen
  
    const filePath = path.join(__dirname, '../uploads/publications/', file);
  
    //Comprobar si existe
    fs.stat(filePath, (error, exists) => {
      if (!exists) {
        return res.status(404).send({
          status: "error",
          message: "La imagen no existe",
        });
      }
      //Devolver la imagen
      return res.sendFile(path.resolve(filePath));
    });
     
  
  };

  //Hacer el feed de las publicaciones

  const feed = async (req, res) => {
    //Sacar la pagina actual
    let page = 1;
  
    if (req.params.page) {
      page = req.params.page;
    }
  
    //Establecer numero de elementos por página
    const itemsPerPage = 5;
  
    try {
      //Sacar un array de identificadores de usuarios que yo sigo como usuario logeado
      const myFollows = await followUserIds.followUserIds(req.user.id);
      
      //Find a publicaciones in, ordenar, popular, paginar
      const publicatio = await publications.find({
        user: myFollows.following 
      })
      .sort('-created_at')
      .skip((page - 1) * itemsPerPage)
      .limit(itemsPerPage) 
      .populate("user","-password -__v -role -email");
      console.log("Publicaciones encontradas:", publicatio);
  
      const total = await publications.countDocuments({
        user: myFollows.followings 
      });
  
      return res.status(200).send({
        status: "success",
        message: "Feed de las publicaciones",
        following: myFollows.following,
        publications: publicatio,
        total,
        pages: Math.ceil(total / itemsPerPage),
        page
      });
    } catch (error) {
      return res.status(500).json({
        status: "error",
        message: "Error en la petición",
        error: error.message,
      });
    }
  };
  
  //Exportar la acciones
  
  module.exports = {
    pruebaPublication,
    save,
    details,
    remove,
    user,
    upload,
    media,
    feed
  };
  