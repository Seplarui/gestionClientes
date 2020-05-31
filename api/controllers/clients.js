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
    if (clienteid == null || clienteid == '') {
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


//Alta cliente

function newClient(req, res) {
    var datosCliente = {}
    datosCliente = {
        cif: req.body.cif,
        razonsocial: req.body.razonsocial,
        contacto: req.body.contacto,
        email: req.body.email,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        horas: req.body.horas
    }

    if (datosCliente.cif == null || datosCliente.cif == '') {
        return res.status(400).send({ message: `El cif no puede estar en blanco` })
    } else {
        conexion.query('SELECT CIF FROM CLIENTES WHERE CIF = ?', datosCliente.cif, function (err, success) {
            if (success.length == 0) {
                conexion.query('INSERT INTO CLIENTES SET ?', datosCliente, function (err, success) {
                    if (err) {
                        res.status(500).send({ message: `Error, no se ha podido dar de alta el cliente, ${err}` })
                    } else {
                        res.status(200).send({ message: `Alta de cliente correcta` })
                    }
                })
            } else {
                res.status(500).send({ message: `El cliente ya existe.` })
            }
        })
    }
}

//Actualizar cliente
function updateClient(req, res) {
    var clienteid = req.body.clienteid
    var datosCliente = {}

    datosCliente = {
        cif: req.body.cif,
        razonsocial: req.body.razonsocial,
        contacto: req.body.contacto,
        email: req.body.email,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        horas: req.body.horas
    }

    if (clienteid == null || clienteid == '') {
        return res.status(400).send({ message: `El identificador del cliente no puede estar en blanco` })
    } else {
        conexion.query('SELECT CIF FROM CLIENTES WHERE CLIENTEID = ?', clienteid, function (err, success) {
            console.log(success)
            if (success.length == 1) {
                conexion.query('UPDATE CLIENTES SET ? WHERE CLIENTEID = ?', [datosCliente, clienteid], function (err, success) {
                    if (err) {
                        res.status(500).send({ message: `No se ha podido actualizar el cliente ${err}` })
                    } else {
                        res.status(200).send({ message: `Actualizado el cliente correctamente.` })
                    }
                })
            } else {
                res.status(500).send({ message: `El cliente no existe.` })
            }
        })
    }
}

function deleteClient(req, res) {
    var clienteid = req.body.clienteid
    if (clienteid == null || clienteid == '') {
        return res.status(400).send({ message: `El identificador del cliente no puede estar en blanco` })
    } else {
        conexion.query('SELECT CIF FROM CLIENTES WHERE CLIENTEID = ?', clienteid, function (err, success) {
            console.log(success)
            if (success.length == 1) {
                conexion.query('DELETE FROM CLIENTES WHERE CLIENTEID = ?', clienteid, function (err, success) {
                    if (err) {
                        res.status(500).send({ message: `No se ha podido eliminar el cliente.` })
                    } else {
                        res.status(200).send({ message: `Cliente borrado correctamente` })
                    }
                })
            } else {
                res.status(500).send({ message: ` El cliente no existe` })
            }
        })
    }
}


module.exports = {
    getClients,
    detailClient,
    newClient,
    updateClient,
    deleteClient
}