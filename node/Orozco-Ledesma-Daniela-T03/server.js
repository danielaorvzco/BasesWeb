const express = require("express");
const puerto = 3000;
let ultimoId = 3;

const app = express();

const libros = [
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

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.json({message: "La página principal"});
});

app.get('/libros', (req, res) => {
    res.json(libros);
});

app.get('/libros/:id', (req, res) => {
    const idx = parseInt(req.params.id);
    const libro = libros.find((p) => p.id === idx)
    if (!libro) {
        return res.status(404).json({message: "Libro no encontrado"});
    }
    res.json(libro);
});

app.post('/libros', (req, res) => {
    let {titulo, autor, sinopsis, genero, editorial, isbn, yearPublicacion, usuario} = req.body;
    if (titulo) titulo = titulo.trim();
    if (autor) autor = autor.trim();
    if (sinopsis) sinopsis = sinopsis.trim();
    if (genero) genero = genero.trim();
    if (editorial) editorial = editorial.trim();
    if (isbn) isbn = isbn.trim();
    if (yearPublicacion) yearPublicacion = yearPublicacion.trim();
    if (usuario) usuario = usuario.trim();

    if (!titulo || !autor || !sinopsis || !genero || !usuario || !editorial || !isbn || !yearPublicacion) {
        return res.status(404).json({message: "Datos incompletos"});
    }
    const nuevoLibro = {
        id : ++ultimoId,
        titulo,
        autor,
        sinopsis,
        genero,
        editorial,
        isbn,
        yearPublicacion,
        usuario,
        fechaAlta : new Date()
    };

    libros.push(nuevoLibro);
    res.status(201).json(nuevoLibro);
});

app.patch('/libros/:id', (req, res) => {
    const idx = parseInt(req.params.id);
    const idxArray = libros.findIndex((p) => p.id === idx);

    if(idxArray === -1) {
        return res.status(404).json({message: "Libro no encontrado"});
    }

    if (!req.body) {
        return res.status(404).json({message: "Datos a actualizar incompletos"});
    }

    let {titulo, autor, sinopsis, genero, editorial, isbn, yearPublicacion, usuario} = req.body;
    if (titulo) titulo = titulo.trim();
    if (autor) autor = autor.trim();
    if (sinopsis) sinopsis = sinopsis.trim();
    if (genero) genero = genero.trim();
    if (editorial) editorial = editorial.trim();
    if (isbn) isbn = isbn.trim();
    if (yearPublicacion) yearPublicacion = yearPublicacion.trim();
    if (usuario) usuario = usuario.trim();

    if (!(titulo, autor, sinopsis, genero, editorial, isbn, yearPublicacion, usuario)) {
        return res.status(404).json({message: "Datos incompletos"});
    }

    if (titulo) libros[idxArray].titulo = titulo;
    if (autor) libros[idxArray].autor = autor;
    if (sinopsis) libros[idxArray].sinopsis = sinopsis;
    if (genero) libros[idxArray].genero = genero;
    if (editorial) libros[idxArray].editorial = editorial;
    if (isbn) libros[idxArray].isbn = isbn;
    if (yearPublicacion) libros[idxArray].yearPublicacion = yearPublicacion;
    if (usuario) libros[idxArray].usuario = usuario;

    res.json(libros[idxArray]);
});

app.delete('/libros/:id', (req, res) => {
    const idx = parseInt(req.params.id);
    const idxArray = libros.findIndex((p) => p.id === idx);

    if (idxArray === -1) {
        return res.status(404).json({message: "Libro no encontrado"});
    }

    const libroEliminado = libros.splice(idxArray, 1);
    res.json(libroEliminado);
});

app.use((req, res) => {
    res.status(404);
    res.json({ message: "Recurso no encontrado" });
});

app.use((err, req, res) => {
    res.status(500).json({message: "Error del servidor"});
});

app.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}..`);
});