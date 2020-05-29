'use strict'

var mysql = require('mysql')

var con = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'clientes'
})

module.exports = con