const mongoose = require('mongoose');


const connection = async (req, res, next) => {
  try {
    await mongoose.connect('mongodb+srv://gianni:12345@apiredsocial.azomvrd.mongodb.net/mi_redsocial');

    console.log('Conectado a la base de datos mi_redsocial Web');
    
    
  } catch (error) {
    console.log(error);
    throw new Error('Error conectando a la base de datos');
    
  }
};

module.exports = {
  connection,
};
