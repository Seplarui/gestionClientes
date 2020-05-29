'use strict'

const conexion = require('../config/configdb')

function getClients(req, res) {
    conexion.query('SELECT * FROM CLIENTES', function (err, success) {
        if (err) {
            res.status(500).send({ message: `Error, no se han podido recuperar los datos: ${err}` })
        } else {
            console.log(success)
            res.status(200).send({ message: success })
        }
    })
}



module.exports = {
    getClients
}