const db = require('../database/models');
const op = db.Sequelize.Op;

let productosControlador = {
    agregarProducto: function(req, res) {
        console.log(req.body);
        const {marca, modelo,imagen, descripcion, precio, email} = req.body; 

        db.Productos.create({
            marca:marca,
            modelo:modelo,
            imagen: 'images/products/autos1.jpeg',
            descripcion:descripcion,
            precio:precio,
            email:email,
            usuario_id: 1
        }).then(producto => {
            console.log(producto.get({
              plain: true
            }));
          }).catch(error => console.log(error)); 
    return res.redirect("/")
}
};


module.exports = productosControlador;


        