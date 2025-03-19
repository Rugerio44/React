import React from 'react'
import { Routes, Route, BrowserRouter,Navigate,Link } from 'react-router-dom';
import { PublicLayout } from '../components/layout/public/PublicLayout';
import { Login } from '../components/user/Login';
import { Register } from '../components/user/Register';
import { PrivateLayout } from '../components/layout/private/PrivateLayout';
import { Feed } from '../components/publication/Feed';
import { AuthProvider } from '../context/AuthProvider';

export const Routing = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
          <Routes>
            {/* Public Layout */}
            <Route path="/" element={<PublicLayout />}>
              <Route index element={<Login />} />
              <Route path="login" element={<Login />} />
              <Route path="registro" element={<Register />} />
            </Route>
            {/* Private Layout */}
            <Route path="/social" element={<PrivateLayout />}>
              <Route index element={<Feed />} />
              <Route path="feed" element={<Feed />} />
            </Route>

            <Route path="*" element={<div className='Error404'>
              <h1 className='Error404__titulo'>Error 404 
                No se encontró la ruta.</h1> 
              <button className='Error404__boton'><Link to='/' className='Error404__boton--letter'>Regresar a Inicio</Link></button>
            </div>} />
          </Routes>
      </AuthProvider> 
    </BrowserRouter>
  );
}
