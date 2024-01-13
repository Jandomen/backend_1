const miModulo = require('../miModulo')
const suma = require('./suma')
const express = require('express')
const app = express()
const port = 4000

miModulo.saludar("Jando") 

console.log("si es :" + miModulo.caja[9])

miModulo.leerArchivo('./archivos/archivo1.txt')

const direccion = './archivos/nuevoArchivo.txt'

const resumen = 'Pasos para crear una tienda llamada celfon para vender productos en React y deployarla en Vercel, usando MySQL con Railway, Stripe, un login y register para que ingresen a los usuarios directamente a la base de datos sin usar firebase, un .env y un panel que se pueda acceder solo el administrador para agregar o eliminar productos, usando Prisma, el usuario administrador solo se podra loguear con los siguientes datos: root@jandix.com con una contraseña: 5453'


miModulo.crearArchivo(direccion,resumen)

const directorios = './archivos'
const directorios2 = './archivos/nuevoArchivo2.txt'

miModulo.leerDirectorio(directorios)

const IE = './archivos/archivo1.txt'

miModulo.leerInformacionEstado(IE)

miModulo.leerStream(IE)

miModulo.crearStream(directorios2,resumen)

let num1 = 6;
let num2 = 4;

console.log("La suma de 6 y 4 es: " + suma.suma(num1, num2))

app.get('/', (req,res) => {
    res.send('hola estamos en la ´pagina')
})

app.listen(port, () => {
    console.log('La aplicación está escuchando en http://localhost:' + port)
})

