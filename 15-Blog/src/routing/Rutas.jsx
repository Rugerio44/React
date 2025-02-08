import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Inicio from '../components/pages/Inicio';
import Articulos from '../components/pages/Articulos';
import Crear from '../components/pages/Crear';

function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/crear" element={<Crear />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export { Rutas };
