import React from 'react'
import { Header } from '../private/Header.jsx';
import { Navigate, Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar.jsx';
import useAuth from '../../../hooks/useAuth.jsx';


export const PrivateLayout = () => {
  const { auth ,loading } = useAuth();

    if (loading) {
      return <h1>Cargando...</h1>;
    } else {
      return (
        <>
          {/*LAYOUT*/}

          {/*Cabecera y navegación*/}
          <Header />

          {/* Contenido principal y barra lateral */}
          <section className="layout__content">
            {auth._id ? <Outlet /> : <Navigate to="/login" />}
          </section>

          <aside className="layout__aside">
            <Sidebar />
          </aside>
        </>
      );
    }
};
