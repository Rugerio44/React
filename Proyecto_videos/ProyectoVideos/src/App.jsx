import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Listado } from './Componentes/Listado'
import { Buscador } from './Componentes/Buscador'
import { Add } from './Componentes/Add'

function App() {

    const [listadoState,setlistadoState] = useState([]);
  
  return (
    <>
       
       <div className="layout">
        
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            
            <h1>MisPelis</h1>
        </header>

        
        <nav className="nav">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Peliculas</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>

        
        <section id="content" className="content">

          {/*Aqui va el Listado de Peliculas*/ }
          <Listado listadoState={listadoState} setlistadoState={setlistadoState} />

        </section>

        
        <aside className="lateral">
            <Buscador/>

            <Add setlistadoState={setlistadoState}/>
        </aside>

        
        <footer className="footer">
            &copy; <a href="#">Gianni</a>
        </footer>

    </div>
    </>
  )
}

export default App
