const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const libroInfoSchema = new Schema({
    titulo: {
        type: String,
        required: true,
    },
    autor: {
        type: String,
        required: true,
    },
    sinopsis: {
        type: String,
        required: true,
    },
    genero: {
        type: String,
        required: true,
    },
    editorial: {
        type: String,
        required: true,
    },
    isbn: {
        type: Number,
        required: true,
    },
    yearPublicacion: {
        type: Number,
        required: true,
    },
    usuario: {
        type: String,
        required: true,
    },
    fechaAlta: {
        type: Date,
        default: Date.now,
    }
});

const LibroInfo = mongoose.model("LibroInfo", libroInfoSchema);

module.exports = LibroInfo;