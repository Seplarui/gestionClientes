'use strict'

const conexion = require('../config/configdb')

//Listar usuarios

function getUsers(req, res) {
    conexion.query('SELECT * FROM USUARIOS', function (err, success) {
        if (err) {
            res.status(500).send({ message: `Error, no se han podido recuperar los datos: ${err}` })
        } else {
            console.log(success)
            res.status(200).send({message: success})
        }
    })
}

module.exports = {
    getUsers
}