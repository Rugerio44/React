import React, { useState } from 'react'

export const TwitterFollowCard = ({username,nickname, initialIsfollowing}) => {

    const [isFollowing,setIsFollowing] = useState(initialIsfollowing);
    
    const handleClick = () => {
      setIsFollowing(!isFollowing);
    }

    const imageConst = `https://unavatar.io/${username}`
    const text = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClassName = isFollowing
    ? "articulo__botton--isfollowing"
    : "articulo__botton";

    
    
  return ( 
    <>
      <article className="articulo">
        <header className="articulo__header">
          <img
            className="header__img"
            src={imageConst}
            alt="El avatar de midudev"
          />
          <div className="articulo__info">
            <strong className="info__name">{username}</strong>
            <span className="info__nickname"> @{nickname}</span>
          </div>
        </header>
        <aside>
          <button onClick={handleClick} className={buttonClassName}>
            <span className="articulo__botton--seguir">{text}</span>
            <span className="articulo__botton--dejarseguir">Dejar de Seguir</span>
          </button>
        </aside>
      </article>
    </>
  );
}
