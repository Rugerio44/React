import React, { useEffect, useState } from 'react'



export const AjaxComponentes = () => {

    const [usuarios, setusuarios] = useState([]);

    //Funcion Generico para rellenar el array
    
    const generarUsuarios = () => {
       setusuarios([
        {
            id: 1,
            nombre: "Gianni",
            apellido: "Francesco"
        },
        {
            id: 2,
            nombre: "Jordi",
            apellido: "Rugerio"
        },
        {
            id: 3,
            nombre: "Moon",
            apellido: "Rugerio"
        },
        {
            id: 4,
            nombre: "Jorge",
            apellido: "Rugerio"
        },
        {
            id: 5,
            nombre: "Montserrat",
            apellido: "Lezama"
        }
       ]);
    };
    //Generar usuarios
    useEffect(()=> {
        generarUsuarios();
    },[]);
    
  return (
    <div>
        <h2>Listado de Usuarios Via Ajax</h2>

        <ol className='usuarios'>
            {
                usuarios.map(usuario => {
                    console.log(usuario);
                    return <li key={usuario.id}>{usuario.nombre} {usuario.apellido}</li>
                })
            }
        </ol>




    </div>
  )
}
