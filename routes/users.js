var express = require('express');
var router = express.Router();
var usersController = require('../controller/usersControlador')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/logout', usersController.logout)
router.post('/login', usersController.login)
router.post('/registrarUsuario', usersController.registrarUsuario)

module.exports = router;
