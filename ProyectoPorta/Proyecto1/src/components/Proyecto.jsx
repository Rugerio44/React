import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {trabajo} from '../data/Trabajo'

export const Proyecto = () => {

  const [proyecto,setproyecto] = useState({});
  const parametro = useParams();

  useEffect(()=>{
    let proyecto = trabajo.filter(trabajo => trabajo.id === parametro.id);

    setproyecto(proyecto[0]);
  },[]);


  return (
    <div className='page'>
      <h1 className='heading'>{proyecto.nombre}</h1>
      <p>{proyecto.tecnologias}</p>
      <p>{proyecto.descripcion}</p>
      <div >
        <img className="mask__imagen" src={"/img/"+proyecto.id+".jpg"} alt="" />
      </div>
      

    </div>
  )
}
