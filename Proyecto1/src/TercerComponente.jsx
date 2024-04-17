import React from 'react';
import PropTypes from "prop-types";

export const TercerComponente = ({nombre = "Gianni",
                                  apellido = "Rugerio",
                                  ficha}) => {


  return (
    <div>
        <h1>Comunicación entre componentes</h1>
        <ul>
            <li>{nombre}</li>
            <li>{apellido}</li>
            <li>{ficha.especialidad}</li>
            <li>{ficha.especialidad_especialidad}</li>
            <li>{ficha.edad}</li>
        </ul>
    </div>
  )
}

TercerComponente.PropTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    ficha: PropTypes.object
};

TercerComponente.defaultProps = {
    nombre:"Juan",
    apellido:"Pérez"
}