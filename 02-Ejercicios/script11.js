// Escribir una función que reciba un String y devuelva la palabra más larga.
// String Ejemplo: “Guia de JavaScript”
// Resultado esperado : “JavaScript”

function larga(cadena){
    let vector = cadena.split(" ");
    let mayor = "";
    for (let index = 0; index < vector.length; index++) {
        if (index==0){
            mayor = vector[index];
        } else if (vector[index].length > mayor.length){
            mayor = vector[index];
        }
    }
    return mayor;
}
var cadena = prompt("Escriba una frase para devolver la palabra más larga");
var final = larga(cadena);
alert(`La palabra más larga es: ${final}`);