// Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El radio del círculo lo proporcionará el usuario.

function Circulo(radio) {
    this.radio = radio;
    this.area = function () {
        return Math.PI * Math.pow(this.radio, 2);
    }
    this.perimetro = function () {
        return Math.PI * this.radio * 2;
    }
}

var radio = parseFloat(prompt("Ingrese el radio de un círculo"));
var cir = new Circulo(radio);
alert(`El perímetro es: ${cir.perimetro()}
y el área es: ${cir.area()}`);