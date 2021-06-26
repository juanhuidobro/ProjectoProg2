const db = require('../database/models');
const op = db.Sequelize.Op;
const productos = db.Productos;

let productosControlador = {
  index: (req,res)=>{
    producto.findAll()
      .then((resultados)=> res.render('productos',{resultados}))
      .catch((err)=>`Error:${err}`)
  },
  show: (req,res) =>{
    let primaryKey = req.params.id;
    producto.findByPk (primaryKey,{
      include: [{association: 'usuario'}]
    })
    .then (resultados => res.render('productos',{resultados}))
    .catch(err => console.log(err))
  },
  
    agregarProducto: function(req, res) {
        console.log(req.body);
        const {marca, modelo,imagen, descripcion, precio, email} = req.body; 

        db.Productos.create({
            marca:marca,
            modelo:modelo,
            imagen: '/images/productos/',//'/images/productos/${req.file.filename}'
            descripcion:descripcion,
            precio:precio,
            email:email,
            usuario_id: req.session.usuario.id
        }).then(producto => {
            console.log(producto.get({
              plain: true
            }));
          }).catch(error => console.log(error)); 
    return res.redirect("/")
},
searchResults:(req,res) =>{
  let buscar = req.query.search
  db.Productos.findAll({

    where:{[op.or]:[//buscar por marca o modelo o
      {modelo:{[op.like]: buscar}}, //buscar algo parecido 
      {marca:{[op.like]: buscar}},
      {descripcion:{[op.like]: `${buscar}`}},

    ]
  },include: [
    //conectamos con el belongsTo
    {asociation: "usuarios"},
    {asociation: "comentarios"},
  ], })
  .then(resultados =>{
    return res.render("buscar",{"SearchResults": resultados, busqueda} )
  })
  .catch (err => console.log(err))
},
borrar: (req,res)=>{
  let primaryKey = req.params.id;
  productos.destroy({
    where: { id: primaryKey}
  })
  .then (()=> res.redirect ('/'))
  .catch(err =>console.log(err))
},
destroy: (req,res)=>{
  let primaryKey = req.params,id
  productos.destroy({
    where:{ id: primaryKey}
  })
  .then(()=> res.redirect('/'))
  .catch(err => console.log(err))
},
edit: (req,res)=>{
  let primaryKey = req.params.id;
  productos.findByPk(primaryKey)
  .then(resultados => res.render('product-edit', {resultados}))
  .catch(err => console.log(err))
},
update: (req,res)=>{
  let primaryKey = req.params.id;
  let actualizarProducto = req.body;
  productos.update(actualizarProducto,{where:{id:primaryKey}})
  .then(()=> res.redirect('/'))
  .catch(err => console.log(err))
},

};


module.exports = productosControlador;


        