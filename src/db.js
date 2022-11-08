const mongoose = require('mongoose')


const APP_HOST = process.env.APP_HOST;
const APP_BD = process.env.APP_DATABASE;
const MONGODB_URI = `mongodb://${APP_HOST}/${APP_BD}`;

module.exports = () => mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('Ya conectada a la BD: ' + MONGODB_URI))
    .catch(err => console.log(err));
