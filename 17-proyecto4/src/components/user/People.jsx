import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Global } from "../../helpers/Global";
import avatar from "../../assets/img/user.png";

export const People = () => {

  const [users, setUsers] = useState([]); 
  const [page, setPage] = useState(1);

  useEffect(() => { 
    getUsers(page);
  },[]);

  const getUsers = async (page) => {
    //Peticion para sacar los usuarios 
    const request = await fetch(Global.url + "user/list/" + page, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    });

    const data = await request.json();

    //Crear un estado para poder listar 
    if (data.status === "success") {
      setUsers(prevUsers => [...prevUsers, ...data.users]);
    }
    else {
      console.log(data.message);
    }    
  };

  //Next page 
  const nextPage = async () => {
    const newPage = page + 1;
    setPage(newPage);
    getUsers(newPage);
  };

  return (
    <>
      <header className="content__header">
        <h1 className="content__title">Gente</h1>
      </header>

      <div className="content__posts">
        {users.map(user => {
         return (
           <article className="posts__post" key={user._id}>
             <div className="post__container">
               <div className="post__image-user">
                 <a href="#" className="post__image-link">
                   {user.image != 'default.png' && <img src={Global.url + 'user/avatar/' + user.image} className="post__user-image" alt="Foto de perfil"/>}
                   {user.image == 'default.png' && <img src={avatar} className="post__user-image" alt="Foto de perfil"/>}
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
               <a href="#" className="post__button--add">
                 <i className="fa-solid fa-user-plus"></i>
               </a>
               {/*<a href="#" className="post__button">
                  <i class="fa-solid fa-xmark"></i>
               </a>*/}
             </div>
           </article>
         )})}
      </div>

      <div className="content__container-btn">
        <button className="content__btn-more-post" onClick={nextPage}>
          Ver mas personas
        </button>
      </div>
    </>
  );
};
