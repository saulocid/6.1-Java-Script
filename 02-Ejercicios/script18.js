// A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
// a) Determinar cual de los dos elementos de texto es mayor
// b) Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false
// c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos

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
