import React,{useEffect,useReducer} from 'react';
import { JuegoReducer } from '../reducers/JuegoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('juegos')) || [];
}

export const Misvideojuegos = () => {

  const [juegos, dispatch] = useReducer(JuegoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('juegos', JSON.stringify(juegos));
  }, [juegos]);
  
    
  const conseguirDatosForm = e => {
    e.preventDefault();
    
    let juego = {
        id: new Date().getTime(),
        titulo: e.target.titulo.value,
        descripcion: e.target.descripcion.value
    };

    console.log(juego);
    e.target.reset();

    const action = {
        type: 'AGREGAR_JUEGO',
        payload: juego
    };

    dispatch(action);

    console.log(juegos);
  }

  const borramelo = id => {
    const action = {
        type: 'ELIMINAR_JUEGO',
        payload: id
    };
    dispatch(action);
  }
  
  const editar = (e, id) => {
    let juego = {
        id,
        titulo: e.target.value,
        descripcion: e.target.value
    };
    const action = {
        type: "EDITAR_JUEGO",
        payload: juego
    };
    dispatch(action);

}
  return (
    <div>
        <h1>Estos son mis Videojuegos</h1>
    
        <p>Número de videojuegos : {juegos.length}</p>

        <ul>
            <li>
                {juegos.map(juego => (
                    <li key={juego.id}>
                        {juego.titulo}
                        &nbsp;  <button onClick={e => borramelo(juego.id)}>x</button>
                        <input type="text" onBlur={e => editar(e, juego.id)}
                                           onKeyPress={e => {
                                            if(e.key == "Enter"){
                                                editar(e, juego.id);
                                                console.log("Has presionado enter");
                                            }
                                            }}
                        />
                    </li>
                ))}
            </li>
        </ul>
       
        <h3>Agregar Juego</h3>

        <form className='formulario' onSubmit={conseguirDatosForm}>

            <input type="text" name='titulo' placeholder='Titulo'/>

            <textarea name="descripcion" placeholder='Descripcion' id=""></textarea>

            <input type='submit' value="Guardar" />

        </form>

    </div>
  )
}
