import React from 'react'
import { trabajo } from '../data/Trabajo';
import {Link} from 'react-router-dom'

export const ListadoTrabajos = ({limite = 10}) => {
  return (
    <section className="works">
      {
        trabajo.slice(0,limite).map(trabajo =>(

        <article key={trabajo.id} className='works__work-item'>
          
          <div className="work-item__mask">
            <img src={"/img/"+trabajo.id+".jpg"} className='mask__imagen'/>
          </div>
          <div className="info">
            <span className='info__categorias'>{trabajo.categorias}</span>
            <h2> <Link to={"/proyecto/"+trabajo.id} className='info__nombre'> {trabajo.nombre}</Link></h2>
            <p className='info__tecnologias'>Tecnologías: {trabajo.tecnologias}</p>
          </div>
        </article>
      ))
      }
    </section>

    
  )
}