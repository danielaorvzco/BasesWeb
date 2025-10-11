const express = require("express");
const path = require("path");

const puerto = 3000;
const app = express();

app.use(express.static(path.resolve(__dirname, "public")));

// Escuchar peticiones para cada ruta
app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.resolve(__dirname, "public/index.html"));
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/about.html"));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/contact.html"));
});

// Rutas que no coinciden con ninguna de las rutas anteriores
app.use((req, res) => {
    res.status(404);
    res.sendFile(path.resolve(__dirname, "public/notfound.html"));
});

// Manejador de errores del servidor
app.use((err, req, res) => {
    res.status(500);
    res.sendFile(path.resolve(__dirname, "public/error.html"));
})

// Ejecutar servidor para escuchar peticiones
app.listen(puerto, () => {
    console.log(`Servidor escuchando peticiones en el puerto ${puerto}...`);
});