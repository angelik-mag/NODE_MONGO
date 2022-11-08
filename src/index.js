/*Si existe un .env asigna a las variables de entorno lo que tenga dentro */
require('dotenv').config()


const app = require('./server');
require('./db')


app.listen(app.get('port'), () => {
    console.log('probando en nuevo')
})

// RUTAS
const routes = require('./routes/index.routes')
app.use(routes)



