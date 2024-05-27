import React from 'react'
import { trabajo } from '../data/Trabajo';
import {Link} from 'react-router-dom'

export const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>

      <section className="works">
      {
        trabajo.map(trabajo =>(
        <article key={trabajo.id} className='works__work-item'>
          <hr />
          <div className="work-item__mask">
            <img src={"/img/"+trabajo.id+".jpg"} className='mask__imagen'/>
          </div>
          <span>{trabajo.categorias}</span>
          <h2> <Link to={"/proyecto/"+trabajo.id}> {trabajo.nombre}</Link></h2>
          <p>Tecnologías: {trabajo.tecnologias}</p>
        </article>
      ))
      }
      </section>

    </div>
  )
}
