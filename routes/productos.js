var express = require('express');
var router = express.Router();
var productosController = require('../controller/productosControlador')

router.post('/agregarProducto', productosController.agregarProducto)

module.exports = router;