var express = require('express');
var router = express.Router();
let controlador = require("../controller/controlador");


router.get('/index', controlador.index);
router.get('/product-add', controlador.productAdd);
router.get('/product', controlador.product);
router.get('/product-edit', controlador.productEdit);
router.get('/search-results', controlador.searchResults);

module.exports = router; 