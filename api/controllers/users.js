'use strict'

const conexion = require('../config/configdb')

//Listar usuarios

function getUsers(req, res) {
    conexion.query('SELECT * FROM USUARIOS', function (err, success) {
        if (err) {
            res.status(500).send({ message: `Error, no se han podido recuperar los datos: ${err}` })
        } else {
            console.log(success)
            res.status(200).send({ message: success })
        }
    })
}

//Detalle usuario

function detailUser(req, res) {
    var userid = req.body.userid
    if (userid == null || userid == '') {
        res.status(400).send({ message: `No se encuentra el usuario` })
    } else {
        conexion.query('SELECT * FROM USUARIOS WHERE USUARIOID = ?', userid, function (err, success) {
            if (err) {
                res.status(500).send({ message: `Error, no se ha podido recupearr el usuario, ${err}` })
            } else if (success.length == 1) {
                res.status(200).send({ message: success })
            } else {
                res.status(400).send({ message: `El usuario no existe.` })
            }
        })
    }
}

//Alta usuario

function newUser(req, res) {
    var datosUsuario = {}
    datosUsuario = {
        usuario: req.body.usuario,
        password: req.body.password,
        nombre: req.body.nombre,
        tipousuario: req.body.tipousuario
    }
    if (datosUsuario.usuario == null || datosUsuario.usuario == '') {
        return res.status(400).send({ message: `El usuario no puede estar en blanco` })
    } else {
        conexion.query('SELECT USUARIO FROM USUARIOS WHERE USUARIO = ?', datosUsuario.usuario, function (err, success) {
            if (success.length == 0) {
                conexion.query('INSERT INTO USUARIOS SET ?', datosUsuario, function (err, success) {
                    if (err) {
                        res.status(500).send({ message: `Error, no se ha podido dar de alta el usuario, ${err}` })
                    } else {
                        res.status(200).send({ message: `Alta de usuario correcta` })
                    }
                })
            } else {
                res.status(500).send({ message: `El usuario ya existe` })
            }
        })
    }
}

module.exports = {
    getUsers,
    detailUser,
    newUser
}