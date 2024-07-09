import React, { useState } from 'react'

/* export const Tareas = () => {

    const [tareas,setTareas] = useState([]);

    const guardarTareas = e => {
      e.preventDefault();

      const tarea_actualizadas = [...tareas, e.target.descripcion.value] ;

      setTareas(tarea_actualizadas);

      console.log(tareas);
    } */
      export const Tareas = () => {
        const [tareas, setTareas] = useState([]);
        const [mensajeError, setMensajeError] = useState('');
      
        const guardarTareas = e => {
          e.preventDefault();
          const nuevaTarea = e.target.descripcion.value;
      
          // Verificar si la tarea ya existe en la lista
          if (tareas.includes(nuevaTarea)) {
            setMensajeError('¡La tarea ya existe en la lista!');
            return; // No la agregamos nuevamente
          }
      
          // Agregar la nueva tarea a la lista
          const tareasActualizadas = [...tareas, nuevaTarea];
          setTareas(tareasActualizadas);
          setMensajeError(''); // Limpiar el mensaje de error
      
          console.log(tareasActualizadas);
        };

        // Función para borrar una tarea
        const borrartarea = id =>{
          const tareasActualizadas = tareas.filter((tarea, indice) => indice!== id);
          setTareas(tareasActualizadas);
          console.log(tareasActualizadas);   // Mostrar la lista actualizada después de borrar una tarea
        }
      
      
  return (
    <div className='tarea'>
      <h1 className='tarea__titulo'>Mis Tareas</h1>

        <form className='tarea__form'
              onSubmit={guardarTareas}>
          
          <input type="text"
                 name="descripcion" 
                 placeholder='Describe la tarea' 
                 className='form__descripcion' />

          <input type="submit" 
                 value="Guardar"
                 className='form__enviar' />
        </form>

        {mensajeError && <h3 className='error'>{mensajeError}</h3>}

        <h3 className='tarea__lista'>Lista 
          <ul>
            { 
              
              tareas.map((tareas, indice) =>{
                return (
                  <li key={indice}>
                    {tareas}
                    <button className="lista__listas" onClick={() => borrartarea(indice)}>X</button>
                  </li>
                )  
              })  
            
            
            }
          </ul>
        </h3>


    </div>
  )
}
