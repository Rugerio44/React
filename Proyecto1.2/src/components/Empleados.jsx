import React, { useEffect, useState } from 'react'

export const Empleados = 
        () => {

            const [empleados,setempleados] = useState([]);

            useEffect(() => {
              conseguirempleados();
            },[]);

            const conseguirempleados = async() => {
              const url = "https://reqres.in/api/users?page=2";
              const peticion = await fetch(url);
              const {data: empleados} = await peticion.json();

              setempleados(empleados);
            }

            console.log("Se ha vuelto a renderizar empleados");

            return (
              <div className="empleados">
                <ul className='empleados__empleado'>
                  {empleados.map(empleado =>{
                    return <li key={empleado.id}>{empleado.first_name +" "+ empleado.last_name +""+ empleado.avatar}</li>
                  })}
                </ul>
              </div>
            );

        }
