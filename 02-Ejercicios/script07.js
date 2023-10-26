// Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación solicite números al usuario hasta que la suma de los números introducidos supere el límite inicial. 

var num = parseInt(prompt("Ingrese un valor máximo numérico"));
alert("A continuación vaya ingresando números hasta que la suma supere a " + num);
var suma = 0;
while (suma <= num) {
    suma += parseInt(prompt("La suma es " + suma + ". Ingerse un número a sumar"));
}
alert("La suma total es " + suma);