// Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor, Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el numero de páginas

function Libro(ISBN, titulo, autor, paginas) {
    this.ISBN = ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
}

function cargaDatos() {
    let libro = new Libro();
    libro.ISBN = parseInt(prompt("Ingrese el ISBN del libro"));
    libro.titulo = prompt("Ingrese el título del libro");
    libro.autor = prompt("Ingrese el autor");
    libro.paginas = parseInt(prompt("Ingerse la cantidad de páginas"));
    return libro;
}

function mostrar(libro) {
    alert(`Los atributos del libro son:
    ISBN: ${libro.ISBN}
    Título: ${libro.titulo}
    Autor: ${libro.autor}
    Total de páginas: ${libro.paginas}`);
}

alert("A continuación se cargarán los datos para crear un libro");
const l = cargaDatos();
mostrar(l);