const express = require('express')
const librosRouter = require('./routes/libros')
const path = require('path')
require('dotenv').config();
const port = 4000
require('./db')
const app = express()


app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')
app.use(express.static('public'))

const libros = [
    { id: 1, titulo: 'Libro 1' },
    { id: 2, titulo: 'Libro 2' },
    { id: 3, titulo: 'Libro 3' }
];


app.use((req, res, next) => {
    console.log(`Solicitud recibida en: ${new Date()}`);
    next(); 
});


app.get('/', (req, res) => {
    res.sendFile('views/index.html', { root: __dirname });
  });

app.get('/usuarios', (req, res) => {
    res.send('Lista de usuarios');
});

app.get('/usuarios/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Detalles del usuario con ID ${userId}`);
});

app.get('/libros', (req, res) => {
    res.json(libros);
});

app.get('/libros/:id', (req, res) => {
    const libroId = parseInt(req.params.id);
    const libro = libros.find(l => l.id === libroId);

    if (libro) {
        res.json(libro);
    } else {
        res.status(404).json({ mensaje: 'Libro no encontrado' });
    }
});

app.put('/libros/:id', (req, res) => {
    const libroId = parseInt(req.params.id);
    const libroIndex = libros.findIndex(l => l.id === libroId);

    if (libroIndex !== -1) {
        libros[libroIndex].titulo = req.body.titulo;
        res.json(libros[libroIndex]);
    } else {
        res.status(404).json({ mensaje: 'Libro no encontrado' });
    }
});

app.post('/libros', (req, res) => {
    const nuevoLibro = { id: libros.length + 1, titulo: req.body.titulo };
    libros.push(nuevoLibro);
    res.status(201).json(nuevoLibro);
});

app.delete('/libros/:id', (req, res) => {
    let libroId = parseInt(req.params.id);
    let libroIndex = libros.findIndex(l => l.id === libroId);

    if (libroIndex !== -1) {
        libros.splice(libroIndex, 1);
        res.json({ mensaje: 'Libro eliminado correctamente' });
    } else {
        res.status(404).json({ mensaje: 'Libro no encontrado' });
    }
});








app.use('/api', librosRouter)


app.get('*', (req, res) => {
    res.send('Página no encontrada');
});

app.listen(port, () => {
    console.log(`La aplicación está escuchando en http://localhost:${port}`)
})

