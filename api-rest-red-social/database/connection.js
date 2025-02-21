const mongoose = require('mongoose');


const connection = async (req, res, next) => {
  try {
    await mongoose.connect('mongodb://localhost:27017/mi_redsocial');

    console.log('Conectado a la base de datos mi_redsocial');
    
    
  } catch (error) {
    console.log(error);
    throw new Error('Error conectando a la base de datos');
    
  }
};

module.exports = {
  connection,
};
