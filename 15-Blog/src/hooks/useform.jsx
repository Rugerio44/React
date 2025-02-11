import { useState } from 'react';

export const useform = (initialState = {}) => {
  const [formulario, setFormulario] = useState(initialState);
  const [enviado, setEnviado] = useState(false);

  const cambiado = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  const enviadoFormulario = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return {
    formulario,
    enviado,
    cambiado,
    enviadoFormulario
  };
};