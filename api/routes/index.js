'use strict'

const express = require('express')
const router = express.Router();

//Controladores

const clientsCtrl = require('../controllers/clients')
const usersCtrl = require('../controllers/users')

//RUTAS CLIENTES
router.get('/getclients', clientsCtrl.getClients)
router.post('/detailclient', clientsCtrl.detailClient)
router.post('/newclient', clientsCtrl.newClient)
router.post('/updateclient', clientsCtrl.updateClient)
router.post('/deleteclient', clientsCtrl.deleteClient)

//RUTAS USUARIOS
router.get('/getusers', usersCtrl.getUsers)
router.post('/detailuser', usersCtrl.detailUser)
router.post('/newuser', usersCtrl.newUser)


module.exports = router