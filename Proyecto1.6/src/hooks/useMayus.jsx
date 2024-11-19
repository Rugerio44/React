import { useState } from 'react'
export const useMayus = (texto) => {

    const [miTexto, setmiTexto] =  useState(texto);

    const mayusculas = () => {
         setmiTexto(texto.toUpperCase());
        }

    const minusculas = () => {
        setmiTexto(texto.toLowerCase());
    }

    const normal = (added) => {
        setmiTexto (texto+" "+added);
    }

    const invertir = () => {
        setmiTexto(miTexto.split('').reverse().join(''));
    }

    const original = () => {
        setmiTexto("Gianni Francesco");
    }

    return {
        estado: miTexto,
        mayusculas,
        minusculas,
        normal,
        invertir,
        original
    }

    }