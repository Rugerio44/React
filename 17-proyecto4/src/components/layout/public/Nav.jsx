import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../../assets/css/Config.css'; // Import the new CSS file
 
 export const Nav = () => {

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  };
   return (
     <nav className="navbar__container-lists">
       <ul className="container-lists__menu-list">
       </ul>
       
       <ul className="container-lists__list-end">
        <li className="list-end__item">
            <div className="switch-button">
                <div className="switch-icon"> 
                  <input
                    type="checkbox"
                    name="switch-button"
                    id="switch-label"
                    className="switch-button__checkbox"
                    onClick={toggleDarkMode}
                  />
                  <label htmlFor="switch-label" className="switch-button__label"></label>
                </div> 
            </div>
        </li>
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
