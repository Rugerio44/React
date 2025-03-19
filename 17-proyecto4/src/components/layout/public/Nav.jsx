 import React from 'react'
import { NavLink } from 'react-router-dom';
 
 export const Nav = () => {
   return (
     <nav className="navbar__container-lists">
       <ul className="container-lists__menu-list">
       </ul>

       <ul className="container-lists__list-end">
         <li className="list-end__item">
           <NavLink to='/login' className="list-end__link">
             <span className="list-end__name">Login</span>
             <i className="fa-solid fa-user"></i>
           </NavLink>
         </li>
         <li className="list-end__item">
           <NavLink to='/registro' className="list-end__link">
             <span className="list-end__name">Registrar</span>
             <i className="fa-solid fa-id-card"></i>
           </NavLink>
         </li>
       </ul>
     </nav>
   );
 }
 