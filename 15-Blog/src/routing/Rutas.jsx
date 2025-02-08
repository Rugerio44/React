import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Inicio from '../components/pages/Inicio';
import Articulos from '../components/pages/Articulos';
import Crear from '../components/pages/Crear';
import { Header } from '../components/layouts/Header';
import { Nav } from '../components/layouts/Nav';
import { Sidebar } from '../components/layouts/Sidebar';
import { Footer } from '../components/layouts/Footer';

function Rutas() {
  return (

    <BrowserRouter>
    {/* LAYOUT */}
    <Header />
    <Nav />


    {/* Constenido central y rutas */}
    <section id='content' className="content">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/crear" element={<Crear />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

    <Sidebar />
  
    </section>
    
    <Footer />

    </BrowserRouter>
    
    

  )
}

export { Rutas };
