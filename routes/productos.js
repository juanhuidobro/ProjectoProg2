let express = require('express');
let router = express.Router();
const productosController = require('../controller/productosControlador');
const multer = require ('multer');
const path = require('path');

var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null,  'public/images/products') // donde se almacena las imagenes una vez subidas
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)) //extname es para que extraiga el nombre del archivo y use ese
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
router.post('/detail/:id', productosController.destroy)
router.get('/edit/:id', productosController.edit)

router.post ('/edit/:id', productosController.update)


router.get('/searchResults', productosController.searchResults)

router.post('/comentarios/:id', productosController.comentario)

module.exports = router;