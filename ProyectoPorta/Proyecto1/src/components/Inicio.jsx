import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div>

      <h1>
        Hola, soy gianni y soy Desarrollador Web en México,
        soy un desarrollador web,
        me gusta trabajar en proyectos de desarrollo web, diseño web,
        desarrollo de aplicaciones web, desarrollo de sitios web,
        desarrollo de aplicaciones móviles, desarrollo de sitios web móviles,
      </h1>

      <h2>
        Te ayudo a crear tu sitio o aplicación web, tener más 
        visibilidad y relevancia en internet.<Link to="/contacto">Contactame</Link> ahorita
      </h2>

      <section className="lasts-works">
        <h2>Algunos de mis proyectos:</h2>
        
        <div className="works">
          
        </div>
      </section>

    </div>
  )
}
