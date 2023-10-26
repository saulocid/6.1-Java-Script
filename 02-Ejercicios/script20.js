// Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y muestre el siguiente array [6, 9, 12, 15, 18]. 

var ma = [[3], [6], [9], [12], [15]];
alert(`La matriz es [${ma}]`);

ma = ma.flat();
ma = ma.splice(1, 4);
ma.push(18);
alert(`La matriz modificada es [${ma}]`);