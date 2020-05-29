'use strict'

const express= require('express')
const router = express.Router();

//Controladores

const clientsCtrl = require('../controllers/clients')

router.get('/getclients', clientsCtrl.getClients);


module.exports = router