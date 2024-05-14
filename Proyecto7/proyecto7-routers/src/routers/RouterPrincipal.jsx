import React from 'react'
import { Routes, Route , Link, BrowserRouter, NavLink} from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Error } from '../components/Error';
import { Persona } from '../components/Persona';
import { Navigate } from 'react-router-dom';
import { PanelControl } from '../components/PanelControl';
import { InicioPanel } from '../components/panel/InicioPanel';
import { Crear } from '../components/panel/Crear';
import { Gestion } from '../components/panel/Gestion';
import { Acerca } from '../components/panel/Acerca';


export const RouterPrincipal = () => {
  return (
    <BrowserRouter>

        <h1>Header</h1>
        <hr />

        <nav>
          <ul>
            <li>
                <NavLink 
                      to='/inicio'
                      className={
                        ({isActive}) => isActive ? "activado" : "" }                  
                      >Inicio
                </NavLink>
            </li>
            <li><NavLink to='/articulos'
                          className={ ({isActive}) => isActive ? "activado" : "" }  
                      >Articulos</NavLink></li>
            <li><NavLink to='/contacto'
                          className={
                            ({isActive}) => isActive ? "activado" : "" } 
                          >Contacto</NavLink></li>
            <li><NavLink to='/error'
                          className={
                            ({isActive}) => isActive ? "activado" : "" } 
                          >Error</NavLink></li>
            <li><NavLink to='/persona'
                          className={
                            ({isActive}) => isActive ? "activado" : "" } 
                          >Persona</NavLink></li>     

            <li><NavLink to='/panel'
                          className={
                            ({isActive}) => isActive ? "activado" : "" } 
                          >Panel</NavLink></li> 

          </ul>
        </nav>
        
          <section className='contenido-principal'>
            {/*Cargar Componentes*/}
            {/* Aqui se carga el componente que coincide con el path*/}
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/inicio' element={<Inicio />} />
                <Route path='/articulos' element={<Articulos />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/persona/:nombre/:apellido' element={<Persona />} />
                <Route path='/persona/:nombre' element={<Persona />} />
                <Route path='/persona' element={<Persona />} />
                <Route path={"/redirigir"} element={<Navigate to="/Persona/gianni/rugerio" />} />
                
                <Route path={'/panel/*'} element={<PanelControl/> }>
                  <Route index element={<InicioPanel/>} />
                  <Route path='crear-articulos' element={<Crear/>} />
                  <Route path='gestion-usuarios' element={<Gestion/>} />
                  <Route path='acerca-de' element={<Acerca/>} />

                  </Route>
                <Route path='*' element={<Error/> } />
            </Routes>
          </section>
        <hr />

        <h2>Footer</h2>
        <hr />
    </BrowserRouter>
  )
}

