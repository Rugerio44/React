import React, { useEffect, useState } from 'react'



export const AjaxComponentes = () => {

    const [usuarios, setusuarios] = useState([]);
    const [cargando, setcargando] = useState(true);
    const [errores, seterrores] = useState("");
    let timeout = 3000;

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
    /*Primera farma de llamar un ajax*/ 
    const getusuariosAjaxpromise = () =>{
        fetch("https://reqres.in/api/users?page=1")
            .then(respuesta => respuesta.json())
            .then(
                resultado_final => {
                    setusuarios(resultado_final.data);
                    console.log(usuarios);
                },
                error => {
                    console.log(error);
                }
            )

    }
    /*Segunda farma de llamar un ajax*/
    const getUsuariosAjaxAW = () => {
        setTimeout(async() => {
            try{
            const peticion = await fetch("https://reqres.in/api/users?page=1");
            const {data} = await peticion.json();
            setusuarios(data);
            setcargando(false);

            }
            catch(error){
                console.log(error);
                seterrores(error.message);
            };
        }, timeout);
       
    }


    


    //Generar usuarios
    useEffect(()=> {
       // generarUsuarios();
       //getusuariosAjaxpromise();
       getUsuariosAjaxAW();
    },[]);


    if(errores !== ""){
        return (
            <div className='errores'>
                <h4>Error al cargar</h4>
            </div>
            
        );
    }else if(cargando === true){
        return (
            <div className='cargando'>
                <h4>Cargando...</h4>
            </div>
            
        );
    }else if(cargando ===false && errores === ""){
        return (
            <div>
                <h2>Listado de Usuarios Via Ajax</h2>

                <ol className='usuarios'>
                    {
                        usuarios.map(usuario => {
                            console.log(usuario);
                            return (<li key={usuario.id}> 
                                            {usuario.first_name}
                                            {usuario.last_name} 
                                            &nbsp;
                                            <img src={usuario.avatar} width="20" />
                                    </li>);
                        })
                    }
                </ol>

            </div>
        )
    }
}
