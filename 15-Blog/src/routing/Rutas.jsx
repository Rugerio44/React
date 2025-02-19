import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Inicio from '../components/pages/Inicio';
import Articulos from '../components/pages/Articulos';
import Crear from '../components/pages/Crear';
import { Header } from '../components/layouts/Header';
import { Nav } from '../components/layouts/Nav';
import { Sidebar } from '../components/layouts/Sidebar';
import { Footer } from '../components/layouts/Footer';
import { Busqueda } from '../components/pages/Busqueda';
import { Articulo } from '../components/pages/Articulo';
import { Editar } from '../components/pages/Editar';

function Rutas() {

  return (
    <BrowserRouter>
      {/* LAYOUT */}
      <section className="layout">
        <Header />
        <Nav />

        {/* Constenido central y rutas */}
        
          <div className="content">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/articulos" element={<Articulos />} />
              <Route path="/crear" element={<Crear />} />
              <Route path="/buscar/:busqueda" element={<Busqueda />} />
              <Route path="/articulo/:id" element={<Articulo />} />
              <Route path="/editar/:id" element={<Editar />} />
              <Route path="*" element={
                <div>
                  <h2>404 - Página no encontrada</h2>
                </div>
              } />
            </Routes>
          </div>

          <Sidebar className="sidebar"/>
      
      </section>
        <Footer className="footer"/> 
      
    </BrowserRouter>
  );
}

export { Rutas };
