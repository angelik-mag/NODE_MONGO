const { Schema, model } = require('mongoose');


const ElementoSchema = new Schema({
    nombre: {
        type: String
    }
})

const ElementoModel = model('elementos', ElementoSchema)

module.exports = ElementoModel