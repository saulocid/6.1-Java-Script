// Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de todos ellos. 

alert("Ingrese números al azar, el programa finaliza cuando ingrese 0");
var suma = 0;
var cont = 0;
var maxi;
var mini;
var num;
do {
    num = parseInt(prompt("Ingrese un número"));
    if (num == 0){
        break;
    } else {
        suma += num;
        cont++;
        if (cont==1){
            maxi = num;
            mini = num;
        } else if (num > maxi){
            maxi = num;
        } else if (num < mini){
            mini = num;
        }
    }
} while (true);

alert(`El máximo número ingresado es ${maxi}
El mínimo es ${mini}
Y el promedio es ${suma/cont}`);