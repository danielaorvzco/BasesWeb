let array1 = [1, 2, 3, 4, 5];
let array2 = array1;

console.log (array1);
console.log (array2);
array1[0] = 0;
console.log (array1);
console.log (array2);
array2[1] = -1;
console.log (array1);
console.log (array2);

if (array1 === array2) {
    console.log ('si');
}

const objeto1 = {
    nombre: 'Daniela',
    apellidoPaterno: 'Orozco',
    apellidoMaterno: 'Ledesma',
    edad: 22
}

const objeto2 = objeto1;
console.log (objeto1);
console.log (objeto2);
objeto1.edad = 23;
console.log (objeto1);
console.log (objeto2);
objeto2.nombre = 'daniela';
console.log (objeto1);
console.log (objeto2);

if (objeto1 === objeto2) {
    console.log ('si');
}