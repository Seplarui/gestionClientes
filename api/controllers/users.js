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
        usuario: req.body.usuario.usuario,
        password: req.body.usuario.password,
        nombre: req.body.usuario.nombre,
        tipousuario: req.body.usuario.tipousuario
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

//Actualizar usuario

function updateUser(req, res) {
    var usuarioid = req.body.usuarioid
    var datosUsuario = {}

    datosUsuario = {
        usuario: req.body.usuario,
        password: req.body.password,
        nombre: req.body.nombre,
        tipousuario: req.body.tipousuario
    }

    if (usuarioid == null || usuarioid == '') {
        return res.status(400).send({ message: `El identificador del usuario no puede estar en blanco` })
    } else {
        conexion.query('SELECT USUARIO FROM USUARIOS WHERE USUARIOID = ?', usuarioid, function (err, success) {
            console.log(success)
            if (success.length == 1) {
                conexion.query('UPDATE USUARIOS SET ? WHERE USUARIOID = ?', [datosUsuario, usuarioid], function (err, success) {
                    if (err) {
                        res.status(500).send({ message: `No se ha podido actualizar el usuario ${err}` })
                    } else {
                        res.status(200).send({ message: `Actualizado el usuario correctamente.` })
                    }
                })
            } else {
                res.status(500).send({ message: `El usuario no existe.` })
            }
        })
    }
}

function deleteUser(req, res) {
    var usuarioid = req.body.usuarioid
    if (usuarioid == null || usuarioid == '') {
        return res.status(400).send({ message: `El identificador del usuario no puede estar en blanco` })
    } else {
        conexion.query('SELECT USUARIO FROM USUARIOS WHERE USUARIOID = ?', usuarioid, function (err, success) {
            console.log(success)
            if (success.length == 1) {
                conexion.query('DELETE FROM USUARIOS WHERE USUARIOID = ?', usuarioid, function (err, success) {
                    if (err) {
                        res.status(500).send({ message: `No se ha podido eliminar el usuario.` })
                    } else {
                        res.status(200).send({ message: `Usuario borrado correctamente` })
                    }
                })
            } else {
                res.status(500).send({ message: `El usuario no existe` })
            }
        })
    }
}

function checkLogin(req, res) {
    var datos = {}
    datos = {
        usuario: req.body.usuario,
        password: req.body.password
    }
    if (datos.usuario == null || datos.usuario == '' || datos.password == null || datos.password == '') {
        return res.status(400).send({ message: `Los datos no pueden estar en blanco.` })
    } else {
        conexion.query('SELECT USUARIO, PASSWORD, TIPOUSUARIO FROM USUARIOS WHERE USUARIO = ? AND PASSWORD = ?', [datos.usuario, datos.password], function (err, success) {
            console.log(success)
            if (success.length == 1) {
                res.status(200).send({ message: `Login correcto` })
            } else {
                res.status(400).send({ message: `Login incorrecto` })
            }

        })
    }
}

module.exports = {
    getUsers,
    detailUser,
    newUser,
    updateUser,
    deleteUser,
    checkLogin
}