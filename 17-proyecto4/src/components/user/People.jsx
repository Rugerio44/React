import React, { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";
import avatar from "../../assets/img/user.png";
import useAuth from "../../hooks/useAuth";
import { UserList } from "./UserList";

export const People = () => {
  const { auth } = useAuth();
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMoreUsers, setHasMoreUsers] = useState(true);
  const [loading, setLoading] = useState(true);
  const [following, setFollowing] = useState([]); // Initialize following state

  useEffect(() => {
    getUsers(1);
  }, []);

  const getUsers = async (page) => {
    setLoading(true);

    //Peticion para sacar los usuarios
    const request = await fetch(Global.url + "user/list/" + page, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });

    const data = await request.json();

    if (data.users && data.status === "success") {
      let newUsers = data.users;

      if (users.length >= 1) {
        newUsers = [...users, ...data.users];
      }

      setUsers(newUsers);
      setFollowing(data.Usersfollowing);
      setLoading(false);

      if (users.length >= (data.total - data.users.length  )) {
        setHasMoreUsers(false);
      }
    }
  };

  const nextPage = () => {
    const next = page + 1;
    setPage(next);
    getUsers(next);
    console.log(following);
    
  };

  const follow = (userId) => {
    setFollowing([...following, userId]);
  };

  const unfollow = (userId) => {
    setFollowing(following.filter((id) => id !== userId));
  };

  return (
    <>
      <header className="content__header">
        <h1 className="content__title">Gente</h1>
      </header>

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
              <div className="post__buttons">

                    {following.includes(user._id) &&
                      <a
                        href="#"
                        className="post__button"
                        onClick={() => follow(user._id)}
                      >
                        <i className="fa-solid fa-user-minus"></i>
                      </a>
                    }
                    {!following.includes(user._id) &&
                      <a
                        href="#"
                        className="post__button--add"
                        onClick={() => unfollow(user._id)}
                      >
                        <i className="fa-solid fa-user-plus"></i>
                      </a>
                    }
              </div>
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
