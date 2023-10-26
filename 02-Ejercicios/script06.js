// Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar. En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”. 

var num = parseInt(prompt("Ingrese un numero"));
if (num == 0){
    alert(`El número ${num} no es par  ni impar`);    
} else if (num % 2 == 0){
    alert(`El número ${num} es par`);
} else {
    alert(`El número ${num} es impar`);
}