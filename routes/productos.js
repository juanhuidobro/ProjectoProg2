let express = require('express'); //Para usar express
let router = express.Router();
const productosController = require('../controller/productosControlador'); //Para usar el controlador hay que requerirla 
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


router.get('/', productosController.index);  //Segundo parametro es el metodo utilizado en este caso index (Mostramos lista de productos)
router.get('/detail/:id', productosController.show) //En el metodo show mostramos los datos de un solo auto dependiendo del id elegido
//buscar productos 

//router.get ('/searchResultados/:id', productosController.searchResults)

//agregar productos 

router.get('/agregarProducto', productosController.agregarProducto)
router.post('/agregarProducto', upload.single('imagen'), productosController.agregarProducto)
//router.post('/', upload.single('imagen'), productosController.agregarProducto);

router.get ('/borrar/:id', productosController.borrar)//:id parametro obligatorio que tiene que traer
router.post('/detail/:id', productosController.destroy)//:id parametro obligatorio que tiene que traer
router.get('/edit/:id', productosController.edit)//:id parametro obligatorio que tiene que traer

router.post ('/edit/:id', productosController.update)//Update para guardar en la base de datos informacion editada


router.get('/searchResults', productosController.searchResults)

router.post('/comentarios/:id', productosController.comentario)//:id parametro obligatorio que tiene que traer

module.exports = router;