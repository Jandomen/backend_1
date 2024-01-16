const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;


mongoose.connect(mongoURI, {});

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('Error de conexión a MongoDB:', error);
});

db.once('open', () => {
    console.log('Conexión exitosa a MongoDB');
});
