import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import avatar from '../../assets/img/user.png';
import { Link, useParams } from 'react-router-dom';
import { Global } from '../../helpers/Global';
import { PublicationList } from '../publication/PublicationList';
import { getProfile } from '../../helpers/getProfile';

export const Feed = () => {
  const { auth } = useAuth();
  const [publications, setPublications] = useState([]);
  const [page , setPage] = useState(1);
  const [more, setMore] = useState(true);

  useEffect(() => {
      setMore(true);
      getPublications(1, false);
  }, []); // Add auth._id as a dependency

  const getPublications = async (nextPage =1,showNews = false) => {

    if(showNews){
      setPublications([]);
      setPage(1);
      nextPage = 1;
    }

    const request = await fetch(
      Global.url + "publication/feed" + "/" + nextPage,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    const data = await request.json();
    
    if (data.status === "success") {
      let newPublications = data.publications;

      if (nextPage > 1) {
        newPublications = [...publications, ...data.publications];
      }
      setPublications(newPublications);

      // Actualiza el estado de la página
      setPage(nextPage);

      // Verifica si hay más publicaciones para cargar
      if (newPublications.length < data.total) {
        setMore(true);
      } else {
        setMore(false);
      }
    }
  };

  const nextPage = () => {
    if (more) {
      getPublications(page + 1);
    }
  };

  return (
    <>
      <header className="content__header">
        <h1 className="content__title">Publicaciones</h1>
        <button className="content__button" onClick={() => getPublications(1, false)} >Mostrar nuevas </button>
      </header>

      <div className="content__posts">
        <PublicationList
          publications={publications}
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
}

