import React,{useState} from 'react';


export const EjercicioComponente = ({year}) => {

    const [yearNow,setyearNow] = useState(year);
    
    const siguiente = e => {
        let operacion = yearNow+1;
        setyearNow(operacion);
    }
    const anterior = e => {
        let operacion = yearNow-1;
        setyearNow(operacion);
    }
    const cambiaryear = e => {
        let dato = parseInt(e.target.value);

        if(Number.isInteger(dato)){
            setyearNow(dato);
        }
        else{
           setyearNow(year)
        }
    } 


  return (
    <div>
        <h2>Ejercicio con Eventos y UseState</h2>

        <strong className='label'>
            {yearNow}
        </strong>
        <hr />
        <button onClick={siguiente}>Siguiente</button>
        <hr />
        <button onClick={anterior}>Anterior</button>
        <p>Cambiar año</p>
        <input 
                onChange={cambiaryear}
                type="text" 
                placeholder='Cambia año'  
        />
        
    
    </div>
  )
}




