var express = require('express');
var router = express.Router();
let perfilControlador = require("../controller/perfilControlador")

router.get('/login', perfilControlador.login);
router.get('/profile', perfilControlador.profile);
router.get('/register', perfilControlador.register);


module.exports = router; 
