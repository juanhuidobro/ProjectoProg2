let express = require('express');
let router = express.Router();
const productosController = require('../controller/productosControlador');
const multer = require ('multer');
const path = require('path');

var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null,  'public/images/products')
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
      }
    })
    
    var upload = multer({ storage: storage })


router.get('/', productosController.index); 
router.get('/detail/:id', productosController.show)
//buscar productos 

//router.get ('/searchResultados/:id', productosController.searchResults)

//agregar productos 

router.get('/agregarProducto', productosController.agregarProducto)
router.post('/agregarProducto', upload.single('imagen'), productosController.agregarProducto)
//router.post('/', upload.single('imagen'), productosController.agregarProducto);

router.get ('/borrar/:id', productosController.borrar)
router.get ('/destroy', productosController.destroy)
router.get('/edit/:id', productosController.edit)

router.get ('/update', productosController.update)


router.get('/searchResults', productosController.searchResults)

router.post('/comentarios/:id', productosController.comentario)

module.exports = router;