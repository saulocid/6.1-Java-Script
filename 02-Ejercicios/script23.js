//Resalte todas las palabras de más de 8 caracteres en el texto del párrafo (con un fondo amarillo, por ejemplo)

document.addEventListener("DOMContentLoaded", function () {
    var parrafos = document.querySelectorAll("p");

    parrafos.forEach(function (parrafo) {
        var palabras = parrafo.textContent.split(" ");
        var palabrasResaltadas = palabras.map(function (palabra) {
            return palabra.length >= 8 ? `<span class="resaltar">${palabra}</span>` : palabra;
        });
        parrafo.innerHTML = palabrasResaltadas.join(" ");
    });
})