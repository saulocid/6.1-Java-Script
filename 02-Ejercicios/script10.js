// Escribir una función flecha que reciba una palabra y la devuelva al revés. 

const revez = (cadena) => {
    let aux = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        aux += cadena.substring(i, i+1);
    }
    return aux;
}
var cadena = prompt("Ingrese un texto para darlo vuelta");
var aux = revez(cadena);
alert(`La cadena volteada es:
    ${aux}`);