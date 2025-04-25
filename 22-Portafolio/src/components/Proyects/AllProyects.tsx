import Proyects from './Proyects';
import { AuroraText } from "../magicui/aurora-text";

const AllProyects = () => {
  return (
   <>
    <div className="proyect__content">
        <div className="proyect__title">
            <h1><AuroraText>Mis Proyectos</AuroraText></h1>
        </div>
        <div className="proyect__proyects">
            <Proyects />
        </div>
    </div>
   </>
  )
}

export default AllProyects
