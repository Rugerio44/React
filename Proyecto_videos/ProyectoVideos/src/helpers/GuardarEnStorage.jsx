export const GuardarEnStorage = (key,elemento) => {
    //Conseguir los elementos que ya tenemos en localStorage
    let elementos = JSON.parse(localStorage.getItem(key));
    
    console.log(elementos);

    //Comprobar si es un array
    if(Array.isArray(elementos)){
      //añadir dentro del array un elemento nuevo
       elementos.push(elemento);
    }
    else{
      elementos = [elemento];
    }
    
    //Guardar en el localStorage
    localStorage.setItem(key, JSON.stringify(elementos));
    //Devolver objeto guardado
    return elemento;
    
 }