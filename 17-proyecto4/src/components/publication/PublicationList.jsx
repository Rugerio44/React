import React from 'react';
import { Link } from 'react-router-dom';
import ReactTimeAgo from 'react-time-ago';

export const PublicationList = ({ auth,publications,getPublications, deletePublications, avatar, Global, more, nextPage }) => { 
    
    return (
    <>
      {publications.map((publication, index) => (
        <article className="posts__post" key={`${publication._id}-${index}`}>
          <div className="post__container">
            <div className="post__image-user">
              <Link
                to={`/social/perfil/${publication.user._id}`}
                className="post__image-link"
              >
                {publication.user.image !== "default.png" ? (
                  <img
                    src={`${Global.url}user/avatar/${publication.user.image}`}
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
                <a href="#" className="user-info__name">
                  {publication.user.name + " "}
                </a>
                <span className="user-info__divider"> | </span>
                <a href="#" className="user-info__create-date">
                  <ReactTimeAgo date={publication.create_at} locale="en-US" />
                </a>
              </div>

              <h4 className="post__content"> {publication.title} </h4>

              {publication.file && (
                <img
                  src={Global.url + "publication/media/" + publication.file}
                  className="imagen__publication"
                />
              )}
            </div>
          </div>

          {/* Botón para eliminar la publicación */}
          {auth._id == publication.user._id &&
                <div
                    className="post__buttons"
                    onClick={() => deletePublications(publication._id)}>
                    <button className="post__button">
                    <i className="fa-solid fa-trash-can"></i>
                    </button>
                </div>
          }
        </article>
      ))}

      {/* Botón para ver más publicaciones */}
      {more && (
        <div className="content__container-btn">
          <button className="content__btn-more-post" onClick={nextPage}>
            Ver mas personas
          </button>
        </div>
      )}
    </>
  );
};
