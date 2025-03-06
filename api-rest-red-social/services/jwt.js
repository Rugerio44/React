//importar dependencias 
const jwt = require('jsonwebtoken');
const moment = require('moment');

//Clave secreta 
const secret = 'clave-secreta-jwt4444';

//crear funcion para generar tokens
exports.createToken = (user) => {
    //crear token
    const payload = {
        id: user._id,
        name: user.name,
        lastName: user.lastName,
        birthdate: user.birthdate,
        role: user.role,
        image: user.image,
        email: user.email,
        nickname: user.nickname,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix()
    };
    //devolver jwt token codificados
    return jwt.sign(payload, secret);
};



