'use strict'

const express = require('express')
const router = express.Router();

//Controladores

const clientsCtrl = require('../controllers/clients')
const usersCtrl = require('../controllers/users')

//RUTAS CLIENTES
router.get('/getclients', clientsCtrl.getClients)
router.post('/detailclient', clientsCtrl.detailClient)
router.post('/saveclient', clientsCtrl.newClient)
router.post('/updateclient', clientsCtrl.updateClient)
router.post('/deleteclient', clientsCtrl.deleteClient)

//RUTAS USUARIOS
router.get('/getusers', usersCtrl.getUsers)


module.exports = router