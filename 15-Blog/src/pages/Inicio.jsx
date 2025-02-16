import React from 'react';
import {Link} from 'react-router-dom';

const Inicio = () => {
  return (
    <div className='jumbo'>
      <h1 className='bienvenidos'>Bienvenido al blog con react</h1>
      <p className='bienvenidos__parrafo'>Blog desarrollado con el Mern Stack (MongoDb, Express, React, Node js) </p>
      <Link to='/articulos' className='button' >articulos</Link>
    </div>
  );
};

export default Inicio;