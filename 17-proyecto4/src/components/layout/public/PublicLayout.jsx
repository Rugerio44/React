import React from 'react'
import { Header } from '../public/Header.jsx';
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth.jsx';

export const PublicLayout = () => {

  const {auth} = useAuth();

  return (
    <>
        {/*LAYOUT*/}

        <Header/>

        <section className="layout__content">
          {!auth._id ? <Outlet/> : <Navigate to='/social'/>}
            
        </section>
    </>
  )
}
