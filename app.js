//Requires 
var express = require('express');
var mongoose = require('mongoose');






//Inicializar variables

var app = express();


//Base de dades
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;

    console.log('Conexion con la base de datos correcta: \x1b[32m%s\x1b[0m', 'online');

});

//Rutas

app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Peticion correcta'
    });
});


//Escuchar 

app.listen(3000, () => {
    console.log('Express server corriendo en puerto 3000: \x1b[32m%s\x1b[0m', 'online');

});