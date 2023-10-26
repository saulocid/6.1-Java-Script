// Escribir un programa de JavaScript que a través de un formulario calcule el radio de un circulo y lo muestre en el HTML.

var text = document.getElementById("number");
var spanArea = document.getElementById("area");
var spanPerimetro = document.getElementById("perimetro");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    let radio = parseFloat(text.value).toFixed(2);
    let area = Math.PI*Math.pow(radio,2);
    let perimetro = Math.PI*2*radio;
    spanArea.textContent = `El área es ${area}`
    spanPerimetro.textContent = `El perímetro es ${perimetro}`;
});