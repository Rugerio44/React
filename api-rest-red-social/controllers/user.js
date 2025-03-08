const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('../services/jwt');
const mongoosePagination = require('mongoose-pagination');
 
// Acciones de prueba
const pruebaUser = (req, res) => {
  return res.status(200).send({
    message: "Mensaje enviado desde el Controllers/user.js hola "+req.user.name ,
    user: req.user
  });
};

// Registrar Usuarios
const register = async (req, res) => {
  try {
    // Recoger los parametros de la petición
    let params = req.body;
    console.log(params);

    // Comprobar que me llegan los datos (+ validación)
    if (!params.password || !params.name || !params.email || !params.nickname) {
      console.log("Error de datos");
      return res.status(400).json({
        message: "Faltan datos o son incorrectos",
      });
    }

    // Crear objeto usuario 
    let user_to_save = new User(params);

    // Control de Usuarios duplicados para eliminar
    let users = await User.find({
      $or: [
        { email: user_to_save.email.toLowerCase() },
        { nickname: user_to_save.nickname.toLowerCase() },
      ],
    }).exec();

    if (users && users.length >= 1) {
      console.log("Usuario duplicado");
      return res.status(200).send({
        status: "success",
        message: "El usuario ya existe",
      });
    }

    // Cifrar la contraseña
    user_to_save.password = await bcrypt.hash(params.password, bcrypt.genSaltSync(10));

    // Guardar usuario en la base de datos
    let userStored = await user_to_save.save(); // cambio requerido aquí

    return res.status(200).json({
      status: "success",
      message: "Usuario registrado correctamente",
      user: userStored,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: "Error al registrar el usuario",
    });
  }
};

let login = async (req, res) => {
  try {
    // RECOGER PARAMETROS BODY
    const { email, password } = req.body;
 
    // VALIDAR QUE SE ENVIARON TODOS LOS DATOS
    if (!email || !password) {
      return res.status(400).send({
        status: "error",
        message: "Faltan datos por enviar",
      });
    }
 
    // BUSCAR USUARIO EN LA BASE DE DATOS
    const user = await User.findOne({ email }).select('+password'); // Incluye el campo `password` si está excluido por defecto
    
    if (!user) {
      return res.status(404).send({
        status: "error",
        message: "No existe el usuario que buscas",
      });
    }
 
    // COMPROBAR SU CONTRASEÑA
    const pwdMatch = bcrypt.compareSync(password, user.password);
    
    if (!pwdMatch) {
      return res.status(400).send({
        status: "error",
        message: "Contraseña incorrecta",
      });
    }
 
    // Conseguir token
    const token = jwt.createToken(user);
 
    // DEVOLVER DATOS DEL USUARIO (sin la contraseña)
    return res.status(200).send({
      status: "success",
      message: "Login exitoso",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        nickname: user.nickname,
      }
      ,token 
      // token, // Incluye el token si lo estás generando
    });
  } catch (error) {
    // MANEJAR ERRORES
    return res.status(500).send({
      status: "error",
      message: "Error interno del servidor",
      error: error.message,
    });
  }
};

const profile = async (req, res) => {
  try {
    // Recibir el parametro del id
    const id = req.params.id;
    console.log(id);

    // Consulta para sacar los datos del usuario
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).send({
        status: "error",
        message: "Usuario no existe",
      });
    }

    return res.status(200).send({
      status: "success",
      message: "Usuario: " + req.user.name,
      user: req.user,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Error en la peticion",
      error: error.message,
    });
  }
};

const list = async (req, res) => {
  try {
    // Consulta para sacar los datos del usuario
    let page = 1;
    if (req.params.page) {
      page = req.params.page;
    }
    page = parseInt(page);
    let itemsPerPage = 5;
    const startIndex = (page - 1) * itemsPerPage;

    const users = await User.find()
      .sort("_id")
      .skip(startIndex)
      .limit(itemsPerPage);

    if (!users || users.length === 0) {
      return res.status(404).send({
        status: "error",
        message: "No hay usuarios disponibles",
      });
    }

    const total = await User.countDocuments();

    return res.status(200).send({
      status: "success",
      message: "Listado de usuarios",
      users,
      total,
      page,
      itemsPerPage,
      pages: Math.ceil(total / itemsPerPage),
    });

  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Error en la consulta",
      error: error.message,
    });
  }
};

const update = async (req, res) => {
  let userIdentity = req.user;
  let userToUpdate = req.body;

  // Eliminar Campos que no me sirvan
  delete userToUpdate.role;
  delete userToUpdate.exp;
  delete userToUpdate.iat;
  delete userToUpdate.image;

  // Comprobar si el usuario ya existe
  if (userToUpdate.email || userToUpdate.nickname) {
    let users = await User.find({
      $or: [
        userToUpdate.email ? { email: userToUpdate.email.toLowerCase() } : null,
        userToUpdate.nickname
          ? { nickname: userToUpdate.nickname.toLowerCase() }
          : null,
      ].filter(Boolean),
    }).exec();

    let userIsset = false;
    users.forEach((user) => {
      if (user.id.toString() !== userIdentity.id.toString()) {
        userIsset = true;
      }
    });

    if (userIsset) {
      console.log("Usuario duplicado");
      return res.status(200).send({
        status: "success",
        message: "El usuario ya existe",
      });
    }
  }

  // Cifrar la contraseña
  if (userToUpdate.password) {
    userToUpdate.password = await bcrypt.hash(
      userToUpdate.password,
      bcrypt.genSaltSync(10)
    );
  }

  // Actualizar usuario en la base de datos
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userIdentity.id,
      userToUpdate,
      { new: true }
    );
    return res.status(200).send({
      status: "success",
      message: "Usuario actualizado correctamente",
      user: updatedUser,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Error al actualizar el usuario",
      error: error.message,
    });
  }
};

const upload = (req, res) => {

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
    return res.status(200).send({
      status: "success",
      message: "Subida de imagen correcta",
      user: req.user,
      file: req.file,
      files: req.files,
      image,
    });
  }
};

// Exportar las acciones
module.exports = {
  pruebaUser,
  register,
  login,
  profile,
  list,
  update,
  upload,
};