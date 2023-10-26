// Realizar un programa que pida una frase y el programa deberá mostrar la frase con un espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el funcionamiento de la función Substring(). 

var str = prompt("Ingrese una frase");
var aux = "";
for (let i = 0 ; i < str.length ; i++) {
    aux += str.substring(i,i+1)+" ";
}
alert(`La cadena modificada es:
${aux}`);