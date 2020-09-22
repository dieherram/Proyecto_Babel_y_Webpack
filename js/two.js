// 2. two.js Debe contener una función que convierta un objeto en formato JSON a string,
// retornando el objeto o bien una excepción de error si no pudo ser procesado

toString = (obj) => {
    try{
    return JSON.stringify(obj);
    } catch (err) {
    return "Ups eso no se puede convertir";
    }
    };
    