//Creamos un objeto vacio
const controller = {}
const connection = require('../db')
const ElementoModel = require('../models/elemento.model')

controller.index = async (req, res) => {
    try {
        
        const title = 'RESPONDIENDO CORRECTAMENTE'
        await connection()
        const allElementos = await ElementoModel.find();
        console.log(allElementos)
        res.send(allElementos)
        

    } catch (error) {
        console.error()
    }

}




 module.exports = controller