// Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de dato

const flecha = (dato) => {
    return typeof dato
}

var cadena = prompt("Ingrese un dato para retornar el tipo");
var aux = flecha(cadena);
alert(`El tipo de dato es ${aux}`);