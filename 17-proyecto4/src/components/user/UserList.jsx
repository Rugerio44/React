import React, { useState } from 'react';
import avatar from "../../assets/img/user.png";
import { Global } from "../../helpers/Global";
import { Link } from 'react-router-dom';
import ReactTimeAgo from 'react-time-ago';

export const UserList = ({ users,setUsers, loading, hasMoreUsers, auth, follow, unfollow, nextPage, following = [],setFollowing, showButtons }) => {
  
  return (
    <>
      <div className="content__posts">
        {users.map((user) => {
          console.log("user.create_at:", user.create_at); // Depuración
          return (
            <article className="posts__post" key={user._id}>
              <div className="post__container">
                <div className="post__image-user">
                  <Link to={`/social/perfil/${user._id}`} className="post__image-link">
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
                    )}
                  </Link>
                </div>

                <div className="post__body">
                  <div className="post__user-info">
                    <Link to={`/social/perfil/${user._id}`} className="user-info__name">
                      {user.name} {user.lastName}
                    </Link>
                    <span className="user-info__divider"> | </span>
                    <Link to={`/social/perfil/${user._id}`} className="user-info__create-date">
                      {user.create_at && !isNaN(new Date(user.create_at / 1000).getTime()) ? (
                        <ReactTimeAgo date={new Date(user.create_at / 1000)} locale="en-US" />
                      ) : (
                        "Fecha no disponible"
                      )}
                    </Link>
                  </div>

                  <h4 className="post__content">{user.bio}</h4>
                </div>
              </div>
              {showButtons && user._id != auth._id && (
                <div className="post__buttons">
                  {following.includes(user._id) && (
                    <button
                      href="#"
                      className="post__button"
                      onClick={() => unfollow(user._id)}
                    >
                      <i className="fa-solid fa-user-minus"></i>
                    </button>
                  )}
                  {!following.includes(user._id) && (
                    <button
                      href="#"
                      className="post__button--add" 
                      onClick={() => follow(user._id)}
                    >
                      <i className="fa-solid fa-user-plus"></i>
                    </button>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
      {loading ? <p>Cargando...</p> : ""}

      {hasMoreUsers && (
        <div className="content__container-btn">
          <button className="content__btn-more-post" onClick={nextPage}>
            Ver mas personas
          </button>
        </div>
      )}
    </>
  );
};