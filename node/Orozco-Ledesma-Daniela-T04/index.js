const mongoose = require("mongoose");
const LibroInfo = require("./models/LibroInfo");

const librosInfo = [
    {
        id : 1,
        titulo : "Mujercitas",
        autor : "Louisa May Alcott",
        sinopsis: "El señor March se ha marchado a la guerra y sus cuatro hijas deben quedarse en casa con su madre, su tía y sus amigos, en medio del bullicio de la vida burguesa de Nueva Inglaterra. Meg, Beth, Amy y Jo, las cuatro hermanas March, tienen intereses muy distintos, pero juntas viven y sufren los cambios que conlleva hacerse un lugar en el mundo y, lo más complicado de todo, crecer.",
        genero : "Clásico",
        editorial : "Penguin",
        isbn: 9786078678181,
        yearPublicacion: 1868,
        usuario : "Daniela Orozco",
        fechaAlta: new Date()
    },
    {
        id : 2,
        titulo : "1984",
        autor : "George Orwell",
        sinopsis: "En un mundo donde el gobierno lo controla todo, incluso lo que piensas, vive Winston Smith. Trabaja modificando noticias antiguas para que siempre digan lo que el Partido quiere. Pero Winston empieza a sospechar que algo no encaja. ¿Y si todo lo que le han contado es una gran mentira? Mientras la gente repite lo que dice el Gran Hermano y tiene miedo de pensar por sí misma, Winston decide buscar la verdad.",
        genero : "Clásico",
        editorial : "Penguin",
        isbn: 9780141036144,
        yearPublicacion: 1949,
        usuario : "Lorena Rivera",
        fechaAlta: new Date()
    },
    {
        id : 3,
        titulo : "Mis días en la librería Morisaki",
        autor : "Satoshi Yagisawa",
        sinopsis : "Jinbocho, Tokio El barrio de las librerías y de las editoriales, paraíso de los lectores. Un rincón tranquilo y ajeno al tiempo, a pocos pasos del metro y de grandes edificios modernos. Filas y filas de escaparates llenos de libros, nuevos o de segunda mano. Takako, con veinticinco años y una vida bastante descolorida, no suele frecuentar ese barrio. Sin embargo, es allí donde se encuentra con la librería Morisaki, que ha pertenecido a su familia durante tres generaciones.",
        genero : "Litertura Moderna",
        editorial : "Letras de plata",
        isbn: 9786077486046,
        yearPublicacion: 2023,
        usuario : "Ivanna Aviña",
        fechaAlta: new Date()
    }
];

mongoose.connect('mongodb://127.0.0.1:27017/librosInfodb').then(() => {
    console.log('Conectado al servidor MongoDB...');
})
.catch(err => {
    console.log(`Error de MongoDB: ${err}`);
});

async function crearDocumento(libroInfo) {
    try {
        const newLibroInfo = await LibroInfo.create(libroInfo);
        if (!newLibroInfo) {
            console.log("No fue posible crear el libro");
            process.exit(1);
        }
        console.log(newLibroInfo);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

async function crearDocumentos() {
    try {
        for(let b of librosInfo) {
            await crearDocumento(b);
        }
        console.log("Libros creados exitosamente");
        process.exit(0);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

async function leerDocumentos() {
    try {
        const libros = await LibroInfo.find({}, {__v: 0});
        console.log(libros);
        process.exit(0);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

async function leerDocumento(id) {
    try {
        const libro = await LibroInfo.findById(id, {__v: 0});
        if (!libro) {
            console.log("Libro no encontrado");
            process.exit(1);
        }
        console.log(libro);
        process.exit(0);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

async function eliminarDocumento(id) {
    try {
        const deletedLibro = await LibroInfo.findByIdAndDelete(id);
        if (!deletedLibro) {
            console.log("Libro no encontrado");
            process.exit(1);
        }
        console.log(deletedLibro);
        process.exit(0);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

async function actualizarDocumento(id, {titulo, autor, sinopsis, genero, editorial, isbn, yearPublicacion, usuario}) {
    try {
        const updatedLibro = await LibroInfo.findByIdAndUpdate(id, {
            titulo,
            autor,
            sinopsis,
            genero,
            editorial,
            isbn,
            yearPublicacion,
            usuario,
        });
        if (!updatedLibro) {
            console.log("Libro no encontrado");
            process.exit(1);
        }
        const updateLibro = await LibroInfo.findById(id);
        console.log("Libro actualizado exitosamente");
        console.log(updateLibro);
        process.exit(0);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

/**
 * Llamadas a las funciones CRUD
 */

crearDocumentos();
// leerDocumentos();
// leerDocumento("68e48b69b91a462472da3e5d"); // MUJERCITAS
// eliminarDocumento("68e48b69b91a462472da3e62");  // Mis días en la libreria Morisaki
// actualizarDocumento("68e48b69b91a462472da3e60", {autor: "Guillermo del Toro"}) // 1984

