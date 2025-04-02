import React from 'react'

export const TwitterFollowCard = ({username,nickname,isFollowing}) => {
    const imageConst = `https://unavatar.io/${username}`
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
          <button className="articulo__botton">Seguir</button>
        </aside>
      </article>
    </>
  );
}
