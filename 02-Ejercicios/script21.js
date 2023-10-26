// Escribir un programa para obtener un array de las propiedades de un objeto Persona. Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura. 

function Persona(nombre, edad, sexo, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.mostrar = function () {
        return `[${this.nombre}, ${this.edad}, ${this.sexo}, ${this.peso}, ${this.altura}]`;
    }
}

var per = new Persona("Saulo", 36, "H", 85, 1.78);

var propiedades = Object.keys(per);
var arr = [];

propiedades.forEach(function (propiedad) {
    if (propiedad != "mostrar") {
        arr.push(per[propiedad]);
    }
});

alert(`Del objeto ${per.mostrar()} obtuvimos el array [${arr}]`);