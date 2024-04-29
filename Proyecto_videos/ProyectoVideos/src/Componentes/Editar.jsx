import React from 'react'

export const Editar = ({pelicula,conseguirPeliculas,seteditar,setlistadoState}) => {

  const tituloComponente = "Editar Pelicula";

  const guardarEdicion = (e,id) => {
    e.preventDefault();
    

    //cose guir el target del evento 
    let target = e.target;
    
    //Buscar el indice del objeto de la pelicula a actualizar 
    const pelis_almacenada = conseguirPeliculas();
    const indice = pelis_almacenada.findIndex(pelicula => pelicula.id == id);

    //Crear Objeto
    let pelicula_actual = {
        id,
        titulo: target.titulo.value,
        descripcion: target.descripcion.value
    }

    //Actualizar el elemento con ese índice 
    pelis_almacenada[indice] = pelicula_actual;

    //Guardar estado
    localStorage.setItem("pelicula", JSON.stringify(pelis_almacenada));

    //Actualizar Estados
    setlistadoState(pelis_almacenada);
    seteditar(0);
    

  };

  return (
    <div className='editform'>
        <hr />
        <h3 className='title'>{tituloComponente}</h3>
        <form onSubmit={e => guardarEdicion(e,pelicula.id)}>
            <input type="text" 
                   name='titulo'
                   placeholder={pelicula.titulo} 
                   className='titulo_editado'
                   //defaultValue={pelicula.titulo}
            />
            <br />
            <textarea name="descripcion" 
                      //defaultValue={pelicula.descripcion}
                      className='descripción_editada'
                      placeholder={pelicula.descripcion}
            > 
            </textarea>
            <br />
            <input type="submit" 
                   value="Editar" 
                   className='boton_editar'
            />
        </form>
    </div>
  )
}
