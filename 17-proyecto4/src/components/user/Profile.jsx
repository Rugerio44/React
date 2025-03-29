import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import avatar from '../../assets/img/user.png';
import { Link, useParams } from 'react-router-dom';
import { getProfile } from '../../helpers/getProfile';
import { Global } from '../../helpers/Global';

export const Profile = () => {
    const [user, setUser] = useState({});
    const { userId } = useParams(); // Obtener el userId de la URL
    const { auth, counters } = useAuth();
    const [follows, setFollows] = useState({}); // Corrected initialization

    useEffect(() => {
        // Cargar el perfil del usuario basado en el userId
        getProfile({ _id: userId }, setUser);
        getUser(); // Llamar a la función para obtener el usuario
    }, [userId]); // Escuchar cambios en userId

    const getUser = async () => {
        const request = await fetch(`${Global.url}user/counters/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        });
        const data = await request.json();
        setFollows(data); 
        
    }
     
    


    return (
      <>
        <header className="aside__profile-info">
          <div className="profile-info__general-info">
            <div className="general-info__container-avatar">
              {user.image !== "default.png" ? (
                <img
                  src={`${Global.url}user/avatar/${user.image}`}
                  className="post__user-image"
                  alt="Foto de perfil"
                />
              ) : (
                <img
                  src={avatar}
                  className="post__user-image"
                  alt="Foto de perfil"
                />
              )}{" "}
            </div>
            <div className="general-info__container-names">
              <div className="container-names__name container-names__name--profile">
                <h1>
                  {user.name} {user.lastName}
                </h1>
                {auth._id !== user._id && (
                  <button className="content__button content__button--right">
                    Seguir
                  </button>
                )}
              </div>
              <p className="container-names__nickname">{user.nickname}</p>
              <p>{user.biography}</p>
            </div>
          </div>
          <div className="profile-info__stats">
            <div className="stats__following">
              <Link to={"/social/siguiendo/"+ user._id} className="following__link">
                <span className="following__title">Siguiendo</span>
                <span className="following__number">
                  {follows.following || 0}
                </span>
              </Link>
            </div>
            <div className="stats__following">
              <Link to={"/social/seguidores/"+ user._id} className="following__link">
                <span className="following__title">Seguidores</span>
                <span className="following__number">
                  {follows.followed || 0}
                </span>
              </Link>
            </div>
            <div className="stats__following">
              <a href="#" className="following__link">
                <span className="following__title">Publicaciones</span>
                <span className="following__number">
                  {follows.publications || 0}
                </span>
              </a>
            </div>
          </div>
        </header>
        <aside className="layout__aside"></aside>
        <div className="content__posts">
          {/* Aquí puedes cargar las publicaciones del usuario */}
        </div>
      </>
    );
};

