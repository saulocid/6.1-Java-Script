// Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el resultado

var arr = [parseFloat((Math.random() * 10).toFixed(2)), parseFloat((Math.random() * 10).toFixed(2)), parseFloat((Math.random() * 10).toFixed(2)), parseFloat((Math.random() * 10).toFixed(2)), parseFloat((Math.random() * 10).toFixed(2)), parseFloat((Math.random() * 10).toFixed(2)), parseFloat((Math.random() * 10).toFixed(2)), parseFloat((Math.random() * 10).toFixed(2)), parseFloat((Math.random() * 10).toFixed(2)), parseFloat((Math.random() * 10).toFixed(2))];
alert(`Del array [${arr}] borramos los 2 últimos datos...`);
arr = arr.splice(0, arr.length-2);
alert(`El array modificado es [${arr}]`);