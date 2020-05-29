'use strict'

const conexion = require('../config/configdb')


//Listar clientes
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

//Detalle cliente

function detailClient(req, res) {
    var clienteid = req.body.clienteid
    if (clienteid == null || clienteid == "") {
        res.status(400).send({ message: `No se encuentra el cliente.` })
    } else {
        conexion.query('SELECT * FROM CLIENTES WHERE CLIENTEID = ?', clienteid, function (err, success) {
            if (err) {
                res.status(500).send({ message: `Error, no se ha podido recuperar el cliente, ${err}` })
            } else if (success.length == 1) {
                res.status(200).send({ message: success })
            } else {
                res.status(400).send({ message: `El cliente no existe.` })
            }
        })
    }
}





module.exports = {
    getClients,
    detailClient
}