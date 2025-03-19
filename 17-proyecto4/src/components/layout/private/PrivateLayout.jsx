import React from 'react'
import { Header } from '../private/Header.jsx';
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar.jsx';


export const PrivateLayout = () => {
  return (
    <>
        {/*LAYOUT*/}

        {/*Cabecera y navegación*/}
        <Header />

        {/* Contenido principal y barra lateral */}
        <section className="layout__content">
                <Outlet />
        </section>

        <aside className="layout__aside">
                <Sidebar />
        </aside>
    </>
  );
}
