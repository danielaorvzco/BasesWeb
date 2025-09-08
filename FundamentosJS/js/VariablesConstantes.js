let x = 10;
let y = "Hola";
let z;

console.log(x);
console.log(y);
console.log(z);

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

z = 3.15;

console.log(typeof z);

z = undefined;

console.log(typeof z);

const L = 13;
console.log(L);
// L= 15; NO SE PUEDE CAMBIAR EL VALOR DE UNA CONSTANTE

const m = "Saludo";
console.log(m);
console.log(typeof m);

let a = 20,
  b = 30,
  c = "Hola",
  d = "Daniela";

console.table({ a, b, c });

console.log(a + b);

console.log(y + " " + d);

console.log(a + y);

const bbb = true;
console.log(a + bbb); //Suma contenido de A + el 1 de TRUE

let n = null;
console.log(typeof n);

let s1 = Symbol("a");
let s2 = Symbol("a");
console.log(s1 === s2);

let n1 = 0xff; // Hexadecimal
console.log(n1);
let n2 = 0xba12; // Hexadecimal
console.log(n2);
let n3 = 0o77; // Octal
console.log(n3);
let n4 = 0b1111; // Binario
console.log(n4);
let n5 = 0.314; // Flotante
console.log(n5);
let n6 = -1.5e-6; // e -> colocar ceros despues de la posición
console.log(n6);
let n7 = 3e6;
console.log(n7);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(isNaN(n4)); // Si es número
console.log(isNaN(bbb)); // Si es número
console.log(isNaN(c)); // No es número
console.log(1 / 0);
console.log(-1 / 0);
console.log(n1.toString());
console.log(n2.toFixed(2));
console.log((100).toExponential());
console.log(n1.toPrecision(20));

let xx = 3.1416;
console.log(xx.toPrecision(20));

console.log(Math.sqrt(25));
console.log(Math.random());
console.log(Math.PI);
console.log(Math.round(3.5));

/**
 * String
 */

let nombre = 'Peter Parker';
console.log(nombre);
let saludo = `Hola, ${nombre}`;
console.log(saludo);
console.log(typeof saludo);
let s3 = 'Hola';
let s4 = 'hola';
console.log(s3 === s4);
console.log(s3 < s4); // Comparación binaria
console.log(s3.charAt(2));
console.log(s4.length);

for(let i=0; i<saludo.length; i++){
  console.log(saludo.charAt(i));
}

console.log(s3.concat(" ", s4));
console.log(saludo.slice(2, 5)); //Mostrar string a partir de posición x
console.log(saludo.slice(3));
console.log(saludo.split(' '));

// Los strings son inmutales, es decir, una vez que se crea como string
// ya no puede ser modificado. Sin embargo, es posible crear un string
// modificado a partir de otro string.

console.log(saludo.toUpperCase());
console.log(saludo);
console.log(saludo.toLowerCase());

// Si se desea conservar el string modificado, es necesario asignarlo
// a una variable (o a una constante).

let saludoMin = saludo.toLowerCase();
let saludoMay = saludo.toUpperCase();
console.log(saludoMin);
console.log(saludoMay);

// Es posible reutilizar una variable de string, pero esto no significa
// que el string original haya cambiado. Simplemente se esta haciendo
// que la variable haga referencia al nuevo string.

saludo = saludo.toUpperCase();
console.log(saludo);

let  num1Str = "123";
console.log(typeof num1Str);
let num1 = parseInt(num1Str);  // Convertir STRING en INT
console.log(typeof num1);
let num2Str = "23.56"; 
console.log(typeof num2Str);
let num10 = parseFloat(num2Str);  // Convertir STRING en FLOAT
console.log(typeof num10);

// NaN : Not a Number
console.log(parseInt(saludo)); // Conversión erronea
let num11Str = '42 otra cosa';
console.log(num11Str);
console.log(typeof num11Str);
let num11 = parseInt(num11Str);
console.log(num11);
console.log(typeof num11);

console.log(saludo[2]);
saludo[2] = 'X'; // No tiene efecto porque no es posible modificar un string
console.log(saludo[2]); // No se puede cambiar, son inmutables

/**
 * Tipo primitivo Boolean
 */

let bandera = false;
let valor;
valor = 0;
// valor = []; ARREGLO VACIO ES UN OBJETO -> TRUE
// console.log(typeof valor);

if(valor){
  console.log('Verdadero');
} else {
  console.log('Falso');
}

console.log(Boolean(valor));  // Objeto Boolean
console.log(!!(valor));  // Doble negación

console.log(typeof null);
let cc;
console.log(typeof cc);

/**
 * Conversión automatica de tipos de datos
 */

console.log(typeof(undefined + ''));
console.log(typeof(10 + 'hola'));
console.log(10 + undefined);
console.log(10 + null);
console.log(10 + true);
console.log(10 + false);

// let w = 10 + ''; La cadena vacia se convierte a 0
let w = 10 + Number('');
console.log(w);
console.log(typeof w);
let num13 = 10 + "5";
console.log(num13);

console.log(10 + []); // [] Vacio se convierte en 0
console.log(10- [2]);
let arr = ['2', '3'];
console.log(10 - arr);
console.log(arr.join());

if (num1 < 10 && num2 >0 && num3 ===2){
  console.log('Hacer algo');
} else {
  console.log('Hacer otra cosa');
}

console.log(num1 < 10 && num2 >0 && num3 ===2);

let resultado = num1 < 10 && num2 >0 && num3 ===2;
console.log(resultado);


console.log(42 == 42.00); // Comparación no estricta(solo compara valores)
console.log(42 == "42"); // Sin considerar tipo de dato

console.log(42 === "42"); // Comparación estricita (compara valores y también tipos de datos)

console.log(n4 === 15);
