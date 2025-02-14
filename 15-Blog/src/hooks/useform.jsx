import { useState } from 'react';

export const useform = (initialState = {}) => {

  const [formulario, setFormulario] = useState(initialState);

  const serializarFormulario = (formulario) => {
    const formData = new FormData(formulario);
    
    const objetoCompleto = {};

    for (let [name, value] of formData) {
      objetoCompleto[name] = value;
    }
    return objetoCompleto;
  }

  const enviado = (e) => {
    e.preventDefault();

    let curso = serializarFormulario(e.target);

    setFormulario(curso);

    document.querySelectorAll('.codigo').forEach(element => {
      element.classList.add('enviado'); // Cambio: classList en lugar de classlist
    });
  }

  const cambiado = ({target}) => {
    const {name, value} = target;

    setFormulario({
      ...formulario,
      [name]: value
    });
  }

  return {
    formulario,
    enviado,
    cambiado,
  };
};