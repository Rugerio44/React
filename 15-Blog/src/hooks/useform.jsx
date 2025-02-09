import { useState } from "react";

export const useform = (objetoinicial = {}) => {

    
    const [formulario, setFormulario] = useState(objetoinicial);
  
    const serializarForm = (formulario) => {  
  
      const formData = new FormData(formulario);
  
      const objetoCompleto = {};
  
      for (let [name, value] of formData.entries()) {
        objetoCompleto[name] = value;
      }
      return objetoCompleto;
    };
  
    const enviado = (e) => {
      e.preventDefault();
      
      let curso = serializarForm(e.target);
  

      console.log(curso);
      
      setFormulario(curso);
      
      document.querySelector(".inicio__resultado").classList.add("enviado");
    };


    return {
        formulario,
        enviado
    }
}