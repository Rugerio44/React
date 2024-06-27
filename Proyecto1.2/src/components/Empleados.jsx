import React, { useEffect, useState } from 'react'

export const Empleados = React.memo(
        ({pagina}) => {
            
            const [empleados,setempleados] = useState([]);

            useEffect(() =>{
              console.log("Se ha vuelto a renderizar empleados");
            },[empleados]);

            const conseguirempleados = async(p) => {
              const url = "https://reqres.in/api/users?page="+p;
              const peticion = await fetch(url);
              const {data: empleados} = await peticion.json();

              setempleados(empleados);
            }

            useEffect(() => {
              conseguirempleados(pagina);
            },[pagina]);

            return (
              <div className="empleados">
                <p>Mostrando la página {pagina}</p>
                <ul className='empleados__empleado'>
                  { empleados.length >= 1 &&
                    empleados.map(empleado =>{
                    return <li key={empleado.id}>{empleado.first_name +" "+ empleado.last_name}</li>
                  })}
                </ul>
              </div>
            );

        }
      );