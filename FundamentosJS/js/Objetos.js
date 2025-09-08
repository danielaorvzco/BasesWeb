const direccion = {
    calle : 'Juarez',
    numero : 796,
    colonia : 'Moderna',
    ciudad : 'Guadalajara',
    estado : 'Jalisco',
    pais : 'Mexico',
    cp : '45100',
    casaHabitacion: false,
    coordenadas : {
        latitud : 178.56,
        longitud : -56.4565
    },
    coloresFachada : ['Blanco', 'Gris', 'Negro'],
    'numero de habitantes' : 4,
    // Sobreescritura del metodo toString
    toString : function() {
        return 
    }
};

console.log(direccion.toString());

console.log(direccion.ciudad);
console.log(direccion.coordenadas.latitud);
console.log(direccion.coloresFachada[1]);

direccion.propietario = 'UdeG';
console.log(direccion);

delete direccion.casaHabitacion;
console.log(direccion);

console.log(direccion.calle);
console.log(direccion['calle']);

console.log(direccion['numero de habitantes']);

const ob1 = new Object();
console.log(ob1);
ob1.x = 1;
ob1.y = 2;
console.log(ob1);

const dia = new Date('10/31/2025');
console.log(dia);
console.log(dia.toUTCString());
console.log(dia.getMonth());
console.log(dia.getDay());
console.log(dia.getDate());

const direccion2 = Object.create(direccion);
console.log(direccion2);

const nombresPropiedades = Object.keys(direccion);
console.log(nombresPropiedades);
const valoresPropiedades = Object.values(direccion);
console.log(valoresPropiedades);
const nombresValores = Object.entries(direccion);
console.log(nombresValores);

console.log(Object.getOwnPropertyDescriptor(direccion, 'calle'));
console.log(Object.getOwnPropertyDescriptor(direccion, 'toString'));

console.log('calle' in direccion);
console.log('toString' in direccion);
console.log('tamaño' in direccion);

for (let p in direccion) {
    console.log(p);
    console.log(direccion[p]);
}
