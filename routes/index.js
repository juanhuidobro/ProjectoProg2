var express = require('express');
var router = express.Router();
var controlador = require('../controller/controlador');

/* GET home page. */
router.get('/', controlador.index);

module.exports = router;
