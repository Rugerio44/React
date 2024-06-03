import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>

      <h1>
        Hola, soy gianni y soy <strong>Desarrollador Web</strong> en México,
        soy un desarrollador web,
        me gusta trabajar en proyectos de desarrollo web, diseño web,
        desarrollo de aplicaciones web, desarrollo de sitios web,
        desarrollo de aplicaciones móviles, desarrollo de sitios web móviles,
      </h1>

      <h3 className='title'>
        Te ayudo a crear tu sitio o aplicación web, tener más 
        visibilidad y relevancia en internet.<Link to="/contacto">Contactame</Link> ahorita
      </h3>

      <section className="lasts-works">
        <h3 className='heading'>Algunos de mis proyectos:</h3>
          <hr />
          

        <ListadoTrabajos limite="2"/>
      </section>

    </div>
  )
}
