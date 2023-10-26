// Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios y los muestre por pantalla. 

var vec1 = [];
var vec2 = [];
for (let i = 0; i < 5; i++) {
    vec1[i] = Math.random()*100;
    vec2[i] = Math.random()*25;
}
alert("A continuación se rellenaron 2 vectores con números aleatorios");

for (let i = 0; i < 5; i++) {
    alert(`Vector 1 valor ${i+1} : ${vec1[i]}
Vector 2 valor ${i+1} : ${vec2[i]}`);  
}