
const express = require('express');
const Libro = require('../models/libroModel'); 
const router = express.Router();


router.post('/libros', async (req, res) => {
    try {
        const nuevoLibro = await Libro.create(req.body);
        res.status(201).json(nuevoLibro);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/libros', async (req, res) => {
    try {
        const libros = await Libro.find();
        res.json(libros);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/libros/:id', async (req, res) => {
    try {
        const libro = await Libro.findById(req.params.id);
        res.json(libro);
    } catch (error) {
        res.status(404).json({ mensaje: 'Libro no encontrado' });
    }
});

router.put('/libros/:id', async (req, res) => {
    try {
        const libroActualizado = await Libro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(libroActualizado);
    } catch (error) {
        res.status(404).json({ mensaje: 'Libro no encontrado' });
    }
});

router.delete('/libros/:id', async (req, res) => {
    try {
        await Libro.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Libro eliminado correctamente' });
    } catch (error) {
        res.status(404).json({ mensaje: 'Libro no encontrado' });
    }
});

module.exports = router;
