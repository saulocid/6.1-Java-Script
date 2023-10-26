// Escriba una función de JavaScript para obtener los valores de Nombre y Apellido del siguiente formulario.

function getFormValores() {
    var nombre = document.forms["form1"]["nombre"].value;
    var apellido = document.forms["form1"]["apellido"].value;

    alert(`Los valores del formulario son:
    Nombre: ${nombre}
    Apellido: ${apellido}`);
}