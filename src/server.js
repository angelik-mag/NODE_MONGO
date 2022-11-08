const express = require('express');
const path = require('path');



//Inicializaciones 
const app = express();

// Configuración 

/* Se establece el puerto usando variable de entorno o en su defecto puerto 3000 */
app.set('port', process.env.PORT || 3000);

/* Se establece el puerto usando variable de entorno o en su defecto puerto 3000 */
app.set('views', path.join(__dirname, 'views'));



// Middelwares

app.use(express.urlencoded({ extended: false }));

// Variables globales 

// Rutas



// Archivos estaticos

/* Indica donde está la carpeta public */
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;

