//Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que para calcular el área y el perímetro se utilizan las siguientes fórmulas:
// area = PI * radio2
// perimetro = 2 * PI * radio 

const pi = Math.PI;
var rad = prompt("Ingrese el valor del radio de un círculo");
var area = pi*Math.pow(rad,2);
var per = 2*pi*rad
alert(`El área es ${area} 
y el perímetro es ${per}`);