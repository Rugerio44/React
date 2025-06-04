import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import avatar from '../../assets/img/user.png';
import { Link, useParams } from 'react-router-dom';
import { getProfile } from '../../helpers/getProfile';
import { Global } from '../../helpers/Global';
import { PublicationList } from '../publication/PublicationList';
 
export const Profile = () => {
    const [user, setUser] = useState({});
    const { userId } = useParams(); // Obtener el userId de la URL
    const { auth, counters } = useAuth();
    const [follows, setFollows] = useState({}); // Corrected initialization
    const [iFollow, setIFollow] = useState(false); 
    const [publications, setPublications] = useState([]);
    const [page, setPage] = useState(1);
    const [more, setMore] = useState(true);
 
    useEffect(() => {

      // Cargar el perfil del usuario basado en el userId
        getProfile({ _id: userId }, setUser);
        getUser(); // Llamar a la función para obtener el usuario
        checkFollowStatus(); // Verificar si ya sigue al usuario
        setMore(true);
        getPublications(1, true); // Obtener las publicaciones del usuario
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
    
    const checkFollowStatus = async () => {
        try {
            const request = await fetch(`${Global.url}follow/following/${auth._id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                }
            });

            if (request.ok) {
                const data = await request.json();
                

                // Check if userId exists in the user_following.following array
                if (data.user_following && Array.isArray(data.user_following.following)) {
                    const isFollowing = data.user_following.following.includes(userId);
                    
                    setIFollow(isFollowing);
                } else {
                    console.error("Unexpected API response structure:", data);
                    setIFollow(false);
                }
            } else {
                console.error("Failed to fetch follow status:", request.statusText);
                setIFollow(false);
            }
        } catch (error) {
            console.error("Error checking follow status:", error);
            setIFollow(false);
        }
    };

    const handleFollow = async () => {
        const request = await fetch(`${Global.url}follow/save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify({ followed: userId })
        });
        if (request.ok) {
            setIFollow(true);
        }
    };

    const handleUnfollow = async () => {
        const request = await fetch(`${Global.url}follow/unfollow/${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        });
        if (request.ok) {
            setIFollow(false);
        }
    };

    const getPublications = async (nextPage = 1, newProfile = false) => {
      const request = await fetch(Global.url + 'publication/user/' + userId +"/"+ nextPage ,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: localStorage.getItem('token')
            }
          });
          
          
      const data = await request.json();
      if (data.status === "success") {

        let newPublications = data.publications;

        if(!newProfile && publications.length >= 1) {
          newPublications = [...publications, ...data.publications];
        }

        if(newProfile) {
          newPublications = data.publications;
          setMore(true);
          setPage(1);
        }

        setPublications(newPublications);
        
        
        if (!newProfile && publications.length >= (data.total - data.publications.length )) {
          setMore(false);
        }

        if(data.pages <= 1) { 
         setMore(false);
        }
      }
    };

    const nextPage = () => {
      let next = page + 1;
      setPage(next);
      getPublications(next);
    };

    const deletePublications = async (publicationId) => {

      const request = await fetch(`${Global.url}publication/remove/${publicationId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token')
        },
        
      });
      
      const data = await request.json();
      setPage(1);
      setMore(true);
      getPublications(1, true);
    };

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
                {auth._id !== user._id &&
                  (iFollow ? (
                    <button
                      className="content__button content__button--right post__button"
                      onClick={handleUnfollow}
                    >
                      Dejar de Seguir
                    </button>
                  ) : (
                    <button
                      className="content__button content__button--right"
                      onClick={handleFollow}
                    >
                      Seguir
                    </button>
                  ))}
              </div>
              <p className="container-names__nickname">{user.nickname}</p>
              <p>{user.biography}</p>
            </div>
          </div>
          <div className="profile-info__stats">
            <div className="stats__following">
              <Link
                to={"/social/siguiendo/" + user._id}
                className="following__link"
              >
                <span className="following__title">Siguiendo</span>
                <span className="following__number">
                  {follows.following || 0}
                </span>
              </Link>
            </div>
            <div className="stats__following">
              <Link
                to={"/social/seguidores/" + user._id}
                className="following__link"
              >
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
          <PublicationList 
            publications={publications} 
            deletePublications={deletePublications} 
            getPublications={getPublications}
            avatar={avatar} 
            Global={Global} 
            auth={auth}
            more={more} 
            nextPage={nextPage} 
          />
        </div>
      </>
    );
};

