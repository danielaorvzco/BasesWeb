const express = require("express");
const mongoose = require("mongoose");
const LibroInfo = require("./models/LibroInfo");

const port =  3000;
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/libroinformaciondb").then(() => {
    console.log("Connected to MongoDB server...");
})
.catch(err => {
    console.log(`MongoBD server error: ${err}`);
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.json({status: "sucess", message: "Libros Información API"});
});

app.get("/libroinfo", async(req, res) => {
    try {
        const libros = await LibroInfo.find({}, {__v:0})
        res.json({
            status: "sucess",
            data: {
                librosinfo: libros,
            },
        })
    } catch (err) {
        console.log(err);
    }
});

app.get("/libroinfo/:id", async(req, res) => {
    try {
        const libroId = req.params.id;
        const libro = await LibroInfo.findById(libroId, {__v:0});
        
        if(!libro) {
            return res.status(404).json({
                status: "fail",
                message: "Book not found"
            });
        }

        res.json({
            status: "sucess",
            data: {
                libroinfo: libro,
            },
        });
    } catch (err) {
        console.log(err);
    }
});

app.post("/libroinfo", async(req, res) => {
    try {
        if(!req.body) {
            return res.status(404).json({
                status: "fail",
                message: "Missing data",
            });
        }

        let {titulo, autor, sinopsis, genero, editorial, isbn, yearPublicacion, usuario} = req.body;
        
        if (titulo) titulo = titulo.trim();
        if (autor) autor = autor.trim();
        if (sinopsis) sinopsis = sinopsis.trim();
        if (genero) genero = genero.trim();
        if (editorial) editorial = editorial.trim();
        if (isbn) isbn = isbn; // Campo númerico
        if (yearPublicacion) yearPublicacion = yearPublicacion; // Campo númerico
        if (usuario) usuario = usuario.trim();

        if (!titulo || !autor || !sinopsis || !genero || !editorial || !isbn || !yearPublicacion || !usuario) {
            return res.status(404).json({
                status: "fail",
                message: "Missing data",
            });
        }

        const newLibro = await LibroInfo.create({
            titulo,
            autor,
            sinopsis,
            genero,
            editorial,
            isbn, 
            yearPublicacion,
            usuario,
        });

        if (!newLibro) {
            return res.status(400).json({
                status: "fail",
                message: "Invalid data",
            });
        }

        res.status(201).json({
            status: "sucess",
            data: {
                newlibroinfo: newLibro,
            },
        });
    } catch (err) {
        console.log(err);
    }
});

app.patch("/libroinfo/:id", async(req, res) => {
    try {
        const libroId = req.params.id;

        if (!req.body) {
            return res.status(404).json({
                status: "fail",
                message: "Missing data",
            });
        }

        let {titulo, autor, sinopsis, genero, editorial, isbn, yearPublicacion, usuario} = req.body;

        if (titulo) titulo = titulo.trim();
        if (autor) autor = autor.trim();
        if (sinopsis) sinopsis = sinopsis.trim();
        if (genero) genero = genero.trim();
        if (editorial) editorial = editorial.trim();
        if (isbn) isbn = isbn; // Campo númerico
        if (yearPublicacion) yearPublicacion = yearPublicacion; // Campo númerico
        if (usuario) usuario = usuario.trim();

        if (!(titulo || autor || sinopsis || genero || editorial || isbn || yearPublicacion || usuario)) {
            return res.status(404).json({
                status: "fail",
                message: "Missing data",
            });
        }

        const updatedLibro = await LibroInfo.findByIdAndUpdate(libroId, {
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
            return res.status(404).json({
                status: "fail",
                message: "Book not found",
            });
        }

        res.json({
            status: "success",
            data: null,
        });
    } catch (err) {
        console.log(err);
    }
});

app.delete("/libroinfo/:id", async(req, res) => {
    try {
        const libroId = req.params.id;
        const deletedLibro = await LibroInfo.findByIdAndDelete(libroId);

        if (!deletedLibro) {
            return res.status(404).json({
                status: "fail",
                message: "Booke not found",
            });
        }

        res.json({
            status: "success",
            data: null,
        });
    } catch (err) {
        console.log(err);
    }
});

app.use((req, res) => {
    res.status(404).json({
        status: "fail",
        message: "Not found"
    });
});

app.use((err, req, res) => {
    res.status(500).json({
        status: "error", 
        message: "Server error"
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});

