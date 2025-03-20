import React from 'react'
import { Routes, Route, BrowserRouter,Navigate,Link, NavLink } from 'react-router-dom';
import { PublicLayout } from '../components/layout/public/PublicLayout';
import { Login } from '../components/user/Login';
import { Register } from '../components/user/Register';
import { PrivateLayout } from '../components/layout/private/PrivateLayout';
import { Feed } from '../components/publication/Feed';
import { AuthProvider } from '../context/AuthProvider';
import { Logout } from '../components/user/Logout';
import {Error404} from '../components/user/Error404';
import { People } from '../components/user/People';




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
              <Route path="logout" element={<Logout/>} />
              <Route path='gente' element={<People/>} />
            </Route>

            <Route path="*" element={<Error404/>} />
          </Routes>
      </AuthProvider> 
    </BrowserRouter>
  );
}
