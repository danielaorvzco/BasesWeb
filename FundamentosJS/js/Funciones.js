const a1 = [1, 2, 3, 4];

// Calcular la suema de los valores del arreglo
let suma = 0;
a1.forEach(x => {
    // X toma el valor de cada elemento del arreglo
    suma += x;
})
console.log(suma);

// Modificar el arreglo para que obtenga el cuadrado de los valores
a1.forEach((valor, indice, arreglo) => {
    arreglo[indice] = valor * valor;
});

console.log(a1);

// Crear un arreglo que sume 10 a cada elemento de a1
const a2 = a1.map(x => x + 10); // map(x => {return x + 10})
console.log(a2);
console.log(a1);

// Obtener el arreglo con lso valores de a2 mayor a 15
const a3 = a2.filter(x => x > 15);
console.log(a3);

// Obtener un arreglo con los malores pares de a1
// % es el operador para obener el módulo (residuo) de dos números.
const a4 = a1.filter(x =>  x % 2 == 0);
console.log(a4);

// Encontrar y regresar el primer elemento de a1 al que sea mayor que 10
const elem1 = a1.find(x => x > 10);
console.log(elem1);

// Regresar el indice del primer elemento de a2 que se mayor que 12
const idx1 = a2.findIndex(x => x > 12);
console.log(idx1);

console.log(a1.every(x => x > 0));
console.log(a1.every(x => x > 1));
console.log(a1.some(x => x > 1));

let a6 = [1, [2, [3, [4]]]];
console.log(a6.flat(0));
console.log(a6.flat(1));
console.log(a6.flat(2));
console.log(a6.flat(3));

const a7 = a1.concat(25, 36);
console.log(a7);
console.log(a1);
const a8 = a7.concat([49, 54], [81, 100]);
console.log(a8);
console.log(a7);
const a9 = a8.concat([1, [2]]);
console.log(a9);

const a10 = ['a', 'b', 'c', 'd'];
a10.push('e');
console.log(a10);
a10.push('f', 'g');
console.log(a10);
console.log(a10.push('h')); // PUSH agrega elemento del final del arreglo y regresa el número de elementos
let elem2 = a10.pop(); // POP elimina el último elemento del arrego y regresa el valor eliminado
console.log(elem2);
console.log(a10);

let elem3 = a10.shift(); // SHIFT elimina el primer elemento del arregla y regresa el valor eliminado
console.log(elem3);
console.log(a10);
a10.unshift('A'); // UNSHIFT agrega elemento al principio del arreglo y regresa el largo del array
console.log(a10);

const sub1 = a10.slice(0, 3);
console.log(sub1);

// Eliminar 1 elemento empezando en el indice 3
a10.splice(3, 1);
console.log(a10); // D eliminada
// Eliminar el segundo y tercer elemento de a10 e insertar 'm' y 'n'
a10.splice(2, 2,'m', 'n');
console.log(a10);
a10.fill('X', 0, 5);
console.log(a10);

const a11 = new Array(100);
console.log(a11);
a11.fill(0); // Inicializando todo el arreglo  con 0
console.log(a11);

let idx2 = a11.indexOf('d');
console.log(idx2); // (x)-> Posición encontrada (-1)-> Valor no encontrado en el Array
let idx3 = a10.lastIndexOf('X');
console.log(idx3);
console.log(a10.includes('g'));

const a12 = [1111, 99, -3, 35, 50, 5];
a12.sort();
console.log(a12);
a10.sort();
console.log(a10);
a12.sort((x, y) => {
    if (x < y)
        return -1;
    else if (x > y)
        return 1
    else 
        return 0;
});
console.log(a12);
a12.sort((x, y) => x - y);
console.log(a12);
a12.sort((x, y) => y - x);
console.log(a12);

// Ordenar a10 alfabeticamente sin importar mayusculas y minusculas
a10.sort((x, y) => {
    const x1 = x.toLowerCase();
    const y1 = y.toLowerCase();
    if (x1 < y1) {
        return -1;
    } else if (x1 > y1) {
        return 1;
    } else {
        return 0;
    }
});

console.log(a10);
a10.reverse();
console.log(a10);

const a13 = a10.join(' | '); // Convierte en String 
console.log(a13);