import React from 'react'
import avatar from '../../../assets/img/user.png'
import useAuth from '../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { Global } from '../../../helpers/Global';
import '../../../assets/css/Config.css'; // Import the new CSS file


export const Nav = () => {

    const {auth} = useAuth();
    const toggleDarkMode = () => {
      document.body.classList.toggle('dark-mode');
    };
    

  return (
    <nav className="navbar__container-lists">
      <ul className="container-lists__menu-list">
        <li className="menu-list__item">
          <NavLink to="/social" className="menu-list__link">
            <i className="fa-solid fa-house"></i>
            <span className="menu-list__title">Inicio</span>
          </NavLink>
        </li>
        <li className="menu-list__item">
          <NavLink to="/social/feed" className="menu-list__link">
            <i className="fa-solid fa-user"></i>
            <span className="menu-list__title">Timeline</span>
          </NavLink>
        </li>

        <li className="menu-list__item">
            <NavLink to='/social/gente' className="menu-list__link">
                <i className="fa-solid fa-list"></i>
                <span className="menu-list__title">Gente</span>
            </NavLink>
        </li>
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
          <NavLink to={"/social/perfil/"+auth._id } className="list-end__link-image">
          {auth.image != 'default.png' && <img src={Global.url + 'user/avatar/' + auth.image} className="list-end__img" alt="Foto de perfil"/>}
          {auth.image == 'default.png' && <img src={avatar} className="list-end__img" alt="Foto de perfil"/>}
          </NavLink>
        </li>
        <li className="list-end__item">
          <NavLink to={"/social/perfil/"+auth._id } className="list-end__link">
            <span className="list-end__name">{auth.nickname}</span>
          </NavLink>
        </li>
        <li className="list-end__item">
          <NavLink to='/social/config' className="list-end__link">
            <span className="list-end__name">Ajustes</span>
            <i className="fa-solid fa-gear"></i>
          </NavLink>
        </li>
        <li className="list-end__item">
          {/* Enlace de navegación para cerrar sesión */}
          <NavLink to="logout" className="list-end__link">
            <span className="list-end__name">Cerrar Sesión</span>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </NavLink>
        </li> 
      </ul>
    </nav>
  );
}
