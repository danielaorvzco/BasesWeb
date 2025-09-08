let vacio = [];

let arr = [12, "Hola", true, ["Adios", undefined, null], 34, {}];
// {} es un objeto

console.log(arr);
console.log(typeof arr);
console.log(arr[1]);
console.log(arr[3]);
console.log(arr[3][0]);
console.log(arr.length);
console.log(arr[3].length);

arr[2] = false;
console.log(arr);
arr[3][1] = 0;
console.log(arr);

const ARR2 = [1, , 2];
console.log(ARR2.length);
console.log(ARR2[1]);

const ARR4 = [1, 2, 3];

const ARR3 = [,];
console.log(ARR3.length);

const ARR5 = [arr, ARR2, ARR3];
console.log(ARR5);

let num1 = 10;
let num2 = 20;
let num3 = 30;
const ARR6 = [num1 + num2, num2 + num3];
console.log(ARR6);

const ARR7 = [...ARR4, ARR6];
console.log(ARR7);
console.log(ARR4);
console.log(ARR6);

const ARR8 = ARR4;
console.log(ARR8);
console.log(ARR4);
ARR4[0] = 10;
console.log(ARR4);
console.log(ARR8);

// Con el operador spread es posible una copia INDEPENDIENTE de un arreglo

const ARR9 = [...ARR4];
console.log(ARR4);
console.log(ARR9);
ARR4[0] = 1;
console.log(ARR4);
console.log(ARR9);

// El operador spread se puede aplicar a objetos iterables como los String
const ARR10 = [...'123456789'];
console.log(ARR10);

// Iterar con FOR tradicional
for (let i=0; i<ARR10.length; i++){
    console.log(ARR10[i]);
}

// Iterar con FOR/OF
for (let c of ARR10) {
    console.log(c);
}

// Crear arreglo usando el constructor del objeto Array
const ARR11 =  new Array();
console.log(ARR11);

// Crear arreglo con 10 posiciones
const ARR12 = new Array(10);
console.log(ARR12);

// Crear arreglo con elementos
const ARR13 = new Array(10, 11, 12);
console.log(ARR13);

const ARR14 = new Array("Hola");
console.log(ARR14);

console.log(ARR11.length);
ARR11.length = 5;
console.log(ARR11.length);
console.log(ARR11);

ARR14[1] = "Adios";
console.log(ARR14);
console.log(ARR14.length);
ARR14[3] = "Algo";
console.log(ARR14);
console.log(ARR14.length);
delete ARR14[3];
console.log(ARR14);
ARR14.length = 3;
console.log(ARR14);

let table = new Array(10);
// A cada elemento de este arreglo se le asigna otro arreglo
for (let i=0; i<table.length; i++){
    table[i] = new Array(10);
}

console.log(table);

for (let fila=0; fila<table.length; ++fila) {
    for (let col=0; col<table[fila].length; ++col) {
        table[fila][col] = fila * col;
    }
}

console.log(table[5][7]);

