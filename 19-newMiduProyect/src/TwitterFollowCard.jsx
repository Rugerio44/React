import React, { useState } from 'react'

export const TwitterFollowCard = ({ username, nickname, initialIsfollowing }) => {
  const [isFollowing, setIsFollowing] = useState(initialIsfollowing);
  const [isHovered, setIsHovered] = useState(false); 

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  const imageConst = `https://unavatar.io/x/${username}`;
  const text = isFollowing ? (isHovered ? "Dejar de Seguir" : "Siguiendo") : "Seguir"; 
  const buttonClassName = isFollowing
    ? `articulo__botton--isfollowing ${isHovered ? "hover" : ""}` 
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
          <button
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            className={buttonClassName}
          >
            <span>{text}</span> 
          </button>
        </aside>
      </article>
    </>
  );
};
