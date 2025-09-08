// Declaración de una función
function cuadrado (x) {
    return x * x;
}

// Llamar a la función  -> Puede ser invocada antes de la declaración de la función
let res = cuadrado(10);
console.log(res);

for (let i=0; i < 10; i++) {
    function cubo(x) {
        return x * x * x;
    }
    console.log(cubo(i));
}

console.log(cubo(8));

function hipotenusa(catetoOpuesto, catetoAdyacente) {
    function sumaCuadrados(x, y) {
        return (x * x) + (y * y);
    }
    return Math.sqrt(sumaCuadrados(catetoOpuesto, catetoAdyacente));
}

// console.log(sumaCuadrados(10, 20));
console.log(hipotenusa(4, 5));

// Expresión de funciones
const cuadrado2 = function (x) {
    return x * x;
}

// Invicar función -> Debe de invocarse después de la declaración de la función
let res2 = cuadrado2(10);
console.log(res2);

// Crear una expresión de función e invocar en la misma instrucción
let res5 = (function mult(x, y) {
    return x * y;
})(3, 4);
console.log(res5);

// console.log(i); // No es posible ontener el valor de i porque
                   // la variable no ha sido inicializada aún
// let i = 10;


/**
 * Funciones flecha
 */

const cuadrado3 = (x) => {
    return x * x;
}

const rest3 = cuadrado3(30);
console.log(rest3);

// Si el cuerpo de la función flecha consiste de una instrucción
// de retorno, entonces puede omitirse la palabra RETURN y las
// llaves delimitadoras del cuerpo de la función.
const cuadrado4 = (x) => x * x;

let rest4 = cuadrado(40);
console.log(rest4);

const sumar2 = (x, y) => {
    return x + y;
}

const sumar = (x, y) => x + y;
console.log(sumar(13, 12));

// Si la función flecha tiene un sólo parámetro, es posible omitir
// los paréntesis delimitadores de la lista de paran¿metros
const raizCuadrada = x => Math.sqrt(x);

console.log(raizCuadrada(3));

const saludar = () => {
    console.log('Hola');
}

saludar();

let res6 = saludar();
console.log(res6);

// Metodos
const triangulo = {
    catetoOpuesto : 4,
    catetoAdyacente : 5,
    // Metodo para calcular la hipotenusa
    calcularHipotenusa: function() {
        return Math.sqrt(this.catetoOpuesto * this.catetoOpuesto + 
            this.catetoAdyacente * this.catetoAdyacente);
    },
    // Sobreescritura del metodo toString()
    toString() {
        return (`El triangulo tiene un cateto adyacente de ` + 
        `${this.catetoAdyacente}, cateto opuesto de ${this.catetoOpuesto} ` + 
        `e hipoenusa de ` + `${this.calcularHipotenusa()}`
        );
    },
};

console.log(triangulo);
// Invocación implicita del metodo toString
// se espera recibir un string
console.log(triangulo + '');
// Invocación explícita del metodo toString
console.log(triangulo.toString());

const f = function () {
    return this.catetoAdyacente + this.catetoOpuesto + this.calcularHipotenusa()
};

// Creación dinámica de un metodo
triangulo.perimetro = f;
console.log(triangulo.perimetro());
console.log(triangulo['perimetro']());

const a = [1, 2, 3];
console.log(a.join(' '));

const saludo = 'Hola Mundo';
// console.log(saludo.join(' '));
// let res7 = saludo.join(' ');

console.log(saludo[0]);
let res7 = Array.prototype.join.call(saludo, ' ');
console.log(res7);
let res8 = Array.prototype.join.apply(saludo, [' ']);
console.log(res8);

// En JS no se hace verificación entre el número de argumentos pasados
// en la invocación y el número de parámetros en la definición de la 
// función
console.log(cuadrado(1, 2, 3, 4, 5, 6, 7));
console.log(cuadrado());

// Es posible establecer valores por omisión a los parametros en 
// caso de no recibir el argumento correspondido 
const calcularRaizCuadrada = function(x = 0) {
    return Math.sqrt(x);
}

console.log(calcularRaizCuadrada());
console.log(calcularRaizCuadrada(2));

// Es posible declarar una función que reciba un número variable
// de argumentos 
const multiplicar = function (x = 0, ...rest) {
    let producto = x;
    for(let i = 0; i < rest.length; i++) {
        producto *= rest[i]; // producto = producto + rest[i]
    }
    return producto;
}

console.log(multiplicar());
console.log(multiplicar(2));
console.log(multiplicar(1,2,3,4,5,6,7));

/**
 * Función que calcula y regresa el minimo de una serie de números
 * usando el parametro de un tipo 'rest'
 */
const min = function(x, ...rest) {
    let minimo = x;
    for (let i = 0; i < rest.length; i++){
        if (minimo > rest[i]) {
            minimo = rest[i];
        }
    }
    return minimo;
}

console.log(min(8));
console.log(min(45, -3, 7, 4.5, -12.6, 100));

/** 
 * v1 = [1, 2]
 * v2 = [3, 4]
 * 
 * v1 + v2 = [1+3, 2+4] = [4, 6]
 */

// Sin "desestructuración"
function sumarVectores(v1, v2) {
    return [v1[0]+v2[0], v1[1]+v2[1]];
}
console.log(sumarVectores([1, 2], [3, 4]));

// Con "desestructuración"
function sumarVectores([x1, y1], [x2, y2]) {
    return [x1 + x2, y1 + y2];
}
console.log(sumarVectores([1, 2], [3, 4]));

const arr = [7, 9];
// Sin "desestructuración"
let x = arr[0];
let y = arr[1];
console.log(x);
console.log(y);

let  [xx, yy] = [7, 9];
console.log(xx);
console.log(yy);

console.log(triangulo);
// Obtener valores de las propiedades de un objeto por "desestructuración"
let {catetoOpuesto, catetoAdyacente} = triangulo;
console.log(catetoOpuesto);
console.log(catetoAdyacente);

function obtenerCatetos({catetoOpuesto, catetoAdyacente}) {
    console.log(`Cateto opuesto: ${catetoOpuesto}`);
    console.log(`Cateto adyacente: ${catetoAdyacente}`);
}

obtenerCatetos(triangulo);