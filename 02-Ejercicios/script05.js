// Construir un programa que simule un menú de opciones para realizar las cuatro operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores numéricos enteros. El usuario, además, debe especificar la operación con el primer carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’ o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división. 

var num1 = Math.random()*10;
var num2 = Math.random()*10;
var opc = prompt(`Ingrese una letra para elejir una opción aritmética sabiendo que:
'S' o 's' es para suma
'R' o 'r' es para resta
'M' o 'm' es para multiplicación y
'D' o 'd' es para división`);
switch (opc) {
    case 's':
    case 'S':
        alert(`La suma entre ${num1} y ${num2} es ${num1+num2}`);
        break;
    case 'r':
    case 'R':
        alert(`La resta entre ${num1} y ${num2} es ${num1-num2}`);
        break;
    case 'm':
    case 'M':
        alert(`La multiplicación entre ${num1} y ${num2} es ${num1*num2}`);
        break;
    case 'd':
    case 'D':
        alert(`La división entre ${num1} y ${num2} es ${num1/num2}`);
        break;
    default:
        alert("No elegiste una opción correcta");
}