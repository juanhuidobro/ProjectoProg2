var express = require('express');
var router = express.Router();
let perfilControlador = require("../controller/perfilControlador")
const multer = require ('multer');
const path = require('path');

var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null,  'public/images/users')
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
      }
    })
    
    var upload = multer({ storage: storage })

router.get('/login', perfilControlador.login);
router.get('/profile', perfilControlador.profile);
router.get('/register', perfilControlador.register);
router.get('/profileEdit', perfilControlador.profileEdit);
router.get('/profileDelete/:id', perfilControlador.profileDelete); //:id parametro obligatorio que tiene que traer

module.exports = router; 
