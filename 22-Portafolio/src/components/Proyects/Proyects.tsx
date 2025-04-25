const Proyects = () => {

  interface Item {
    description: string;
    img: string;
    icon1: string | React.ReactNode;
    icon2: string | React.ReactNode;
    text: string;
    text2: string;
    titulo: string;
  }

  const notifications: Item[] = [
    {
      description: "Página web",
      img: "/src/assets/img/web.png",
      icon1: <svg className="articulo__icono" xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 384 512"><path fill="#803caa" d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>,
      icon2: <svg className="articulo__icono2" xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 384 512"><path fill="#803caa" d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>,
      text: "HTML",
      text2: "CSS",
      titulo: "Página web"
    },
    {
      description: "Blog de Videojuegos",
      img: "/src/assets/img/gamer.png",
      icon1: <svg className="articulo__icono" xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 384 512"><path fill="#803caa" d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>,
      icon2: <svg className="articulo__icono2" xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 384 512"><path fill="#803caa" d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>,
      text: "HTML",
      text2: "CSS",
      titulo: "Blog "
    },
    {
      description: "Pagina web",
      img: "/src/assets/img/Soylea.png",
      icon1: <svg className="articulo__icono3" xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 512 512"><path fill="#803caa" d="M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8 .9 0 1.8 .1 2.8 .2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7 .3 13.7 .3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l76.9 228.7 21.2-70.9c9-29.4 16-50.5 16-68.7zm-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9l-65.4-179.2zm183-120.7c.9 6.8 1.4 14 1.4 21.9 0 21.6-4 45.8-16.2 76.2l-65 187.9C426.2 403 468.7 334.5 468.7 256c0-37-9.4-71.8-26-102.1zM504 256c0 136.8-111.3 248-248 248C119.2 504 8 392.7 8 256 8 119.2 119.2 8 256 8c136.7 0 248 111.2 248 248zm-11.4 0c0-130.5-106.2-236.6-236.6-236.6C125.5 19.4 19.4 125.5 19.4 256S125.6 492.6 256 492.6c130.5 0 236.6-106.1 236.6-236.6z"/></svg>,
      icon2: "",
      text: "Wordpress",
      text2: "",
      titulo: "Pagina web Activa"
    }

  ];

  return (
    <div className="articulos__container">
      {notifications.map((item, index) => (
        <article className="articulos__articulo" key={index}>
          <div className="articulo__top">
            <div className="articulo__categoria">{item.description}</div>
            <a href={item.img} className="articulo__imagenlink">
              <div className="articulo__mascara">
                <img
                  src={item.img}
                  className="article__image"
                  alt="Imagen del Blog"
                />
              </div>
              <div className="articulo__logo">
                {item.icon1}
                {item.icon2}
                <p className="articulo__texto1">{item.text}</p>
                <p className="articulo__texto2">{item.text2}</p>
              </div>
            </a>
          </div>

          <div className="articulo__bottom">
            <a href="#" className="articulo__link">
              <h2 className="articulo__titulo">{item.titulo}</h2>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Proyects;
