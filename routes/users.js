var express = require('express');
const usersControlador = require('../controller/usersControlador');
var router = express.Router();
var usersController = require('../controller/usersControlador')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/logout', usersControlador.logout)

module.exports = router;
