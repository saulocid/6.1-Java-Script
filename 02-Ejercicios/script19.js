// Realizar un programa en JavaScript donde se creen dos arreglos: el primero será un arreglo A de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla. Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor 0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado de 20. 

var A = [];
for (let i = 0; i < 50; i++) {
    A[i]=parseFloat((Math.random()*100).toFixed(2));
}

alert(`El arreglo A es:
${A}`);

A.sort((a, b) => a - b);

var B = [];
for (let i = 0; i < 20; i++) {
    if (i<10){
        B[i]=A[i];
    } else {
        B[i]=0.5;
    }  
}

alert(`Vector A ${A}
Vector B ${B}`);