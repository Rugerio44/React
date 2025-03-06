const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('../services/jwt');
 
// Acciones de prueba
const pruebaUser = (req, res) => {
  return res.status(200).send({
    message: "Mensaje enviado desde el Controllers/user.js"
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
      }
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
// Exportar las acciones
module.exports = {
  pruebaUser,
  register,
  login,
};