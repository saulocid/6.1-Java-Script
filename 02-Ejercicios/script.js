//ejercicio 01
function ej01() {
    var str = prompt("¿Cómo está el día de hoy?... ");
    alert(`El día de hoy está ${str}`);
}
document.getElementById("btn01").addEventListener("click", ej01);

//ejercicio 02
function ej02() {
    const pi = Math.PI;
    var rad = prompt("Ingrese el valor del radio de un círculo");
    var area = pi * Math.pow(rad, 2);
    var per = 2 * pi * rad
    alert(`El área es ${area} 
y el perímetro es ${per}`);
}
document.getElementById("btn02").addEventListener("click", ej02);

//ejercicio 03
function ej03() {
    var edad = prompt("Ingrese su edad")
    if (edad > 17) {
        alert("Usted es mayor de edad");
    }
}
document.getElementById("btn03").addEventListener("click", ej03);

//ejercicio 04
function ej04() {
    var opc = prompt("Ingrese 'S' o 'N' ");
    if (opc == "S" || opc == "N") {
        alert("CORRECTO");
    } else {
        alert("INCORRECTO");
    }
}
document.getElementById("btn04").addEventListener("click", ej04);

//ejercicio 05
function ej05() {
    var num1 = Math.random() * 10;
    var num2 = Math.random() * 10;
    var opc = prompt(`Ingrese una letra para elejir una opción aritmética sabiendo que:
    'S' o 's' es para suma
    'R' o 'r' es para resta
    'M' o 'm' es para multiplicación y
    'D' o 'd' es para división`);
    switch (opc) {
        case 's':
        case 'S':
            alert(`La suma entre ${num1} y ${num2} es ${num1 + num2}`);
            break;
        case 'r':
        case 'R':
            alert(`La resta entre ${num1} y ${num2} es ${num1 - num2}`);
            break;
        case 'm':
        case 'M':
            alert(`La multiplicación entre ${num1} y ${num2} es ${num1 * num2}`);
            break;
        case 'd':
        case 'D':
            alert(`La división entre ${num1} y ${num2} es ${num1 / num2}`);
            break;
        default:
            alert("No elegiste una opción correcta");
    }
}
document.getElementById("btn05").addEventListener("click", ej05);

//ejercicio 06
function ej06() {
    var num = parseInt(prompt("Ingrese un numero"));
    if (num == 0) {
        alert(`El número ${num} no es par  ni impar`);
    } else if (num % 2 == 0) {
        alert(`El número ${num} es par`);
    } else {
        alert(`El número ${num} es impar`);
    }
}
document.getElementById("btn06").addEventListener("click", ej06);

//ejercicio 07
function ej07() {
    var num = parseInt(prompt("Ingrese un valor máximo numérico"));
    alert("A continuación vaya ingresando números hasta que la suma supere a " + num);
    var suma = 0;
    while (suma <= num) {
        suma += parseInt(prompt("La suma es " + suma + ". Ingerse un número a sumar"));
    }
    alert("La suma total es " + suma);
}
document.getElementById("btn07").addEventListener("click", ej07);

//ejercicio 08
function ej08() {
    alert("Ingrese números al azar, el programa finaliza cuando ingrese 0");
    var suma = 0;
    var cont = 0;
    var maxi;
    var mini;
    var num;
    do {
        num = parseInt(prompt("Ingrese un número"));
        if (num == 0) {
            break;
        } else {
            suma += num;
            cont++;
            if (cont == 1) {
                maxi = num;
                mini = num;
            } else if (num > maxi) {
                maxi = num;
            } else if (num < mini) {
                mini = num;
            }
        }
    } while (true);

    alert(`El máximo número ingresado es ${maxi}
    El mínimo es ${mini}
    Y el promedio es ${suma / cont}`);
}
document.getElementById("btn08").addEventListener("click", ej08);

//ejercicio 09
function ej09() {
    var str = prompt("Ingrese una frase");
    var aux = "";
    for (let i = 0; i < str.length; i++) {
        aux += str.substring(i, i + 1) + " ";
    }
    alert(`La cadena modificada es:
    ${aux}`);
}
document.getElementById("btn09").addEventListener("click", ej09);

//ejercicio 10
function ej10() {
    const revez = (cadena) => {
        let aux = "";
        for (let i = cadena.length - 1; i >= 0; i--) {
            aux += cadena.substring(i, i + 1);
        }
        return aux;
    }
    var cadena = prompt("Ingrese un texto para darlo vuelta");
    var aux = revez(cadena);
    alert(`La cadena volteada es:
        ${aux}`);
}
document.getElementById("btn10").addEventListener("click", ej10);

//ejercicio 11
function ej11() {
    function larga(cadena) {
        let vector = cadena.split(" ");
        let mayor = "";
        for (let index = 0; index < vector.length; index++) {
            if (index == 0) {
                mayor = vector[index];
            } else if (vector[index].length > mayor.length) {
                mayor = vector[index];
            }
        }
        return mayor;
    }
    var cadena = prompt("Escriba una frase para devolver la palabra más larga");
    var final = larga(cadena);
    alert(`La palabra más larga es: ${final}`);
}
document.getElementById("btn11").addEventListener("click", ej11);

//ejercicio 12
function ej12() {
    const flecha = (dato) => {
        return typeof dato
    }

    var cadena = prompt("Ingrese un dato para retornar el tipo");
    var aux = flecha(cadena);
    alert(`El tipo de dato es ${aux}`);
}
document.getElementById("btn12").addEventListener("click", ej12);

//ejercicio 13
function ej13() {
    function Persona(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    alert("A continuación ingrese datos para crear una persona")
    var nombre = prompt("Ingrese nombre");
    var edad = parseInt(prompt("Ingrese edad"));
    var sexo = prompt("Ingrese sexo");
    var per = new Persona(nombre, edad, sexo);

    alert(`Los datos de la persona creada son:
    nombre: ${per.nombre}
    edad: ${per.edad}
    sexo: ${per.sexo}`);
}
document.getElementById("btn13").addEventListener("click", ej13);

//ejercicio 14
function ej14() {
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
}
document.getElementById("btn14").addEventListener("click", ej14);

//ejercicio 15
function ej15() {
    function Circulo(radio) {
        this.radio = radio;
        this.area = function () {
            return Math.PI * Math.pow(this.radio, 2);
        }
        this.perimetro = function () {
            return Math.PI * 2 * this.radio;
        }
    }

    var radio = parseFloat(prompt("Ingrese el radio de un círculo"));
    var cir = new Circulo(radio);
    alert(`El perímetro es: ${cir.perimetro()}
    y el área es: ${cir.area()}`);
}
document.getElementById("btn15").addEventListener("click", ej15);

//ejercicio 16
function ej16() {
    var vec1 = [];
    var vec2 = [];
    for (let i = 0; i < 5; i++) {
        vec1[i] = Math.random() * 100;
        vec2[i] = Math.random() * 25;
    }
    alert("A continuación se rellenaron 2 vectores con números aleatorios");

    for (let i = 0; i < 5; i++) {
        alert(`Vector 1 valor ${i + 1} : ${vec1[i]}
    Vector 2 valor ${i + 1} : ${vec2[i]}`);
    }
}
document.getElementById("btn16").addEventListener("click", ej16);

//ejercicio 17
function ej17() {
    var arr = [parseFloat((Math.random() * 10).toFixed(2)), parseFloat((Math.random() * 10).toFixed(2)), parseFloat((Math.random() * 10).toFixed(2)), parseFloat((Math.random() * 10).toFixed(2)), parseFloat((Math.random() * 10).toFixed(2)), parseFloat((Math.random() * 10).toFixed(2)), parseFloat((Math.random() * 10).toFixed(2)), parseFloat((Math.random() * 10).toFixed(2)), parseFloat((Math.random() * 10).toFixed(2)), parseFloat((Math.random() * 10).toFixed(2))];
    alert(`Del array [${arr}] borramos los 2 últimos datos...`);
    arr = arr.splice(0, arr.length - 2);
    alert(`El array modificado es [${arr}]`);
}
document.getElementById("btn17").addEventListener("click", ej17);

//ejercicio 18
function ej18() {
    var valores = [true, 5, false, "hola", "adios", 2];

    function textoMayor(valores) {
        let aux = [];
        for (let i = 0; i < valores.length; i++) {
            if (typeof valores[i] == "string") {
                aux.push(valores[i]);
            }
        }
        if (aux[0].length > aux[1].length) {
            return aux[0];
        } else {
            return aux[1];
        }
    }

    var mayor = textoMayor(valores);
    alert(`El mayor de los textos entre ${valores[3]} y ${valores[4]} es ${mayor}`);

    alert(`Usando ${valores[0]} y ${valores[2]} sabemos que
true == false? ${valores[0] === valores[2]}
true != false? ${valores[0] !== valores[2]}`);

    alert(`De los numeros ${valores[1]} y ${valores[5]} sabemos que:
Su suma es ${valores[1] + valores[5]}
Su resta es ${valores[1] - valores[5]}
Su multiplicación es ${valores[1] * valores[5]}
Y división es ${valores[1] / valores[5]}`);
}
document.getElementById("btn18").addEventListener("click", ej18);

//ejercicio 19
function ej19() {
    var A = [];
    for (let i = 0; i < 50; i++) {
        A[i] = parseFloat((Math.random() * 100).toFixed(2));
    }

    alert(`El arreglo A es:
    ${A}`);

    A.sort((a, b) => a - b);

    var B = [];
    for (let i = 0; i < 20; i++) {
        if (i < 10) {
            B[i] = A[i];
        } else {
            B[i] = 0.5;
        }
    }

    alert(`Vector A ${A}
    Vector B ${B}`);
}
document.getElementById("btn19").addEventListener("click", ej19);

//ejercicio 20
function ej20() {
    var ma = [[3], [6], [9], [12], [15]];
    alert(`La matriz es [${ma}]`);

    ma = ma.flat();
    ma = ma.splice(1, 4);
    ma.push(18);
    alert(`La matriz modificada es [${ma}]`);
}
document.getElementById("btn20").addEventListener("click", ej20);

//ejercicio 21
function ej21() {
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
}
document.getElementById("btn21").addEventListener("click", ej21);
