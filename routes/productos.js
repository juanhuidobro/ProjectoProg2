var express = require('express');
var router = express.Router();
var productosController = require('../controller/productosControlador');
var multer = require ('multer');
var path = require('path');

var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null,  'public/image/products')
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
      }
    })
     
    var upload = multer({ storage: storage })
    

router.get('/agregarProducto', productosController.agregarProducto)
router.post('/agregarProducto', productosController.agregarProducto)



router.post('/', upload.single('imagen'), productosController.agregarProducto);

module.exports = router;