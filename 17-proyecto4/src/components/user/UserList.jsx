import React from 'react';
import avatar from "../../assets/img/user.png";
import { Global } from "../../helpers/Global";

export const UserList = ({ users, loading, hasMoreUsers, auth, follow, unfollow, nextPage, following = [] }) => {
  return (
    <>
      <div className="content__posts">
        {users.map((user) => {
          return (
            <article className="posts__post" key={user._id}>
              <div className="post__container">
                <div className="post__image-user">
                  <a href="#" className="post__image-link">
                    {user.image !== "default.png" && (
                      <img
                        src={Global.url + "user/avatar/" + user.image}
                        className="post__user-image"
                        alt="Foto de perfil"
                      />
                    )}
                    {user.image === "default.png" && (
                      <img
                        src={avatar}
                        className="post__user-image"
                        alt="Foto de perfil"
                      />
                    )}
                  </a>
                </div>

                <div className="post__body">
                  <div className="post__user-info">
                    <a href="#" className="user-info__name">
                      {user.name} {user.lastName}
                    </a>
                    <span className="user-info__divider"> | </span>
                    <a href="#" className="user-info__create-date">
                      {user.create_at}
                    </a>
                  </div>

                  <h4 className="post__content">{user.bio}</h4>
                </div>
              </div>
              {user._id != auth._id && (
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