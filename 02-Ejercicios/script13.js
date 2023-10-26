//. Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript.

function Persona (nombre, edad, sexo){
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
}

alert("A continuación ingrese datos para crear una persona")
var nombre = prompt("Ingrese nombre");
var edad = parseInt(prompt("Ingrese edad"));
var sexo = prompt("Ingrese sexo");
var per = new Persona(nombre,edad,sexo);

alert(`Los datos de la persona creada son:
nombre: ${per.nombre}
edad: ${per.edad}
sexo: ${per.sexo}`);