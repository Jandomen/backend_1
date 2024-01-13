const fs = require('fs')
const net = require('net')

function leerArchivo(ruta) {
    fs.readFile(ruta, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
}

function crearArchivo(ruta,data) {
    fs.writeFileSync(ruta, data, 'utf8');
}

function leerDirectorio(ruta){
    fs.readdir(ruta, (err, files) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Archivos en el directorio:', files);
    });
}



function leerInformacionEstado(ruta) {
    fs.stat(ruta, (err, stats) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Información del estado:', stats);
    });
}


function leerStream(ruta) {
    const readStream = fs.createReadStream(ruta);

    readStream.on('data', (chunk) => {
        console.log(`Datos recibidos: ${chunk}`);
    });
    
    readStream.on('end', () => {
        console.log('Lectura completa.');
    });
}

function crearStream(ruta,data) {
    const writeStream = fs.createWriteStream(ruta);

      writeStream.write(data);
      writeStream.end();

      writeStream.on('finish', () => {
    console.log('Escritura completa.');
});
}



function saludar(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}







console.log(saludar("Paco"))


const PI = 3.1416

var caja = ["zapatos", "juegos", "bafle", "cama", "guitarra", "refrigerador", 45, 67, PI, true]

module.exports = {
    saludar: saludar,
    PI: PI,
    caja: caja,
    leerArchivo: leerArchivo,
    crearArchivo: crearArchivo,
    leerDirectorio: leerDirectorio,
    leerInformacionEstado: leerInformacionEstado,
    leerStream: leerStream,
    crearStream: crearStream
    
};
