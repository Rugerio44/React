export const Navbar = () => {
  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="html-section">
        <div className="html-project">
          <div className="navigation">
            <nav>
              <ul className="nav-type">
                <li className="nav__item">
                  <a href="#home" className="nav__title" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a>
                </li>
                <li className="nav__item">
                  <a href="#tecnologias" className="nav__title" onClick={(e) => handleSmoothScroll(e, '#tecnologias')}>Tecnologías</a>
                </li>
                <li className="nav__item">
                  <a href="#proyectos" className="nav__title" onClick={(e) => handleSmoothScroll(e, '#proyectos')}>Proyectos</a>
                </li>
                <li className="nav__item">
                  <a href="#trayectoria" className="nav__title" onClick={(e) => handleSmoothScroll(e, '#trayectoria')}>Trayectoria</a>
                </li>
                <li className="nav__item">
                  <a href="#certificados" className="nav__title" onClick={(e) => handleSmoothScroll(e, '#certificados')}>Certificados</a>
                </li>
                <li className="nav__item">
                  <a href="#acerca" className="nav__title" onClick={(e) => handleSmoothScroll(e, '#acerca')}>Acerca</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
