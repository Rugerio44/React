import React from 'react'
import { Nav } from '../public/Nav.jsx'

export const Header = () => {
  return (
    <>
            <header className="layout__navbar">
    
                    <div className="navbar__header">
                        <a href="#" className="navbar__title">SocialMaker</a>
                    </div>
    
                   <Nav />
    
                    
    
            </header>
    </>
  )
}
