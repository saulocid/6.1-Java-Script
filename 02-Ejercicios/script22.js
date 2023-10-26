//Escribir un programa de JavaScript que al clickear un botón muestre un mensaje a elección.

var text = document.getElementById("text");
var span = document.getElementById("msn");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    span.textContent = text.value;
});