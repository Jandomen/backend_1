
const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema({
    titulo: String,
    autor: String,
    añoPublicacion: Number
});

const Libro = mongoose.model('Libro', libroSchema);

module.exports = Libro;
