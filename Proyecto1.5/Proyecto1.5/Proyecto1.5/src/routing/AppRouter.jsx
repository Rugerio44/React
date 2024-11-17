import React, { useContext } from 'react';
import {Routes,Route,NavLink,BrowserRouter} from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Articulos } from '../components/Articulos';
import { Acerca } from '../components/Acerca';
import { Constacto } from '../components/Constacto';
import { Login } from '../components/Login';
import { PruebaContext } from '../context/PruebaContext';

export const AppRouter = () => {

  const {usuario, setusuario} = useContext(PruebaContext)

  return (
    <BrowserRouter> 
    {/*Menu Navegación*/}
    <header className="header__menu">
        <h1 className='header__menu-h1'>Mi Web</h1>
        <nav className='menu__menu-nav'>
            <ul className='menu-nav__inicio'>
                <li className='inicio__li'>
                    <NavLink to="/" >Inicio</NavLink>
                </li>
                <li className='inicio__li'>
                    <NavLink to="/Articulos" >Articulos</NavLink>
                </li>
                <li className='inicio__li'>
                    <NavLink to="/acerca-de" >Acerca de </NavLink>
                </li>
                <li className='inicio__li'>
                    <NavLink to="/contacto" >Contacto</NavLink>
                </li>
                
                
                
                    {usuario.hasOwnProperty("username") && usuario.username !== null ? (
                        <>
                            <li className='inicio__li'>
                                <NavLink to="/" > {usuario.username}</NavLink>
                            </li>
                            <li className='inicio__li'>
                                <a href="#" onClick={ e => {
                                     e.preventDefault();
                                     setusuario({})
                                }}>Cerrar Sesión</a>
                            </li>
                            {console.log(usuario.username)}
                            
                        </>
                    )
                    : (
                        <li className='inicio__li'>
                            <NavLink to="/Login" > Login</NavLink>
                        </li>
                    )}          
            </ul>
        </nav>
    </header>

    {/*Configurar rutas*/}

    <section className="content">
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/inicio" element={<Inicio/>} />
            <Route path="/articulos" element={<Articulos/>} />
            <Route path="/acerca-de" element={<Acerca/>} />
            <Route path="/contacto" element={<Constacto/>} />
            <Route path="/login" element={<Login/>} />

            <Route path="*" element={(
                <div> 
                    <h1>Esta Página no existe</h1>
                </div>
            )}/>
        </Routes>
    </section>   
    </BrowserRouter>
  )
}
