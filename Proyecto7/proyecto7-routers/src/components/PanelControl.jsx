import React from 'react'
import { Outlet } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
        <h1>Panel de control</h1>
        <p>Elige una de estas opciones</p>
        <nav>
            <ul>
                <li><a href="/panel/inicio">Inicio</a></li>
                <li><a href="/panel/crear-articulos">Crear articulos</a></li>
                <li><a href="/panel/gestion-usuarios">Gestión Usuarios</a></li>
                <li><a href="/panel/acerca-de">Acerca de</a></li>
            </ul>
        </nav>
        <div>
            {/*Quiero cargar aqui los componentes de las subrutas*/}
            <Outlet/>
        </div>

    </div>
  )
}
