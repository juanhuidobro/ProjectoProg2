const db = require('../database/models');
const op = db.Sequelize.Op;
const productos = db.Productos;

let productosControlador = {
  index: (req,res)=>{
    producto.findAll({
    include: [{association: 'usuario'},],
    order: [['created_at', 'DESC']]})
      .then((resultados)=> res.render('productos',{resultados}))
      .catch((err)=>`Error:${err}`)
  },
  show: (req,res) =>{
    let primaryKey = req.params.id;
    productos.findByPk (primaryKey,{
      include: [{association: 'usuario'}]
    })
    .then (producto => {
        console.log(producto)
        db.Comentarios.findAll({where: {
          producto_id: producto.id //Este producto lo traemos del model, que son todos los comentarios de un solo producto
      },
      include: [
          { association: "usuario" },
        ],order: [
          ['fecha', 'DESC' ]
      ],})
      .then (comentarios => {
        ;
        res.render('product',{producto:producto, comentarios:comentarios})})
      })
    .catch(err => console.log(err))
  },
  
    agregarProducto: function(req, res) {
        console.log(req.body);
        const {marca, modelo, descripcion, precio, email} = req.body; 
        
        db.Productos.create({
            marca:marca,
            modelo:modelo,
            imagen: `images/products/${req.file.filename}`,
            descripcion:descripcion,
            precio:precio,
            email:email,
            usuario_id: req.session.user.id
        }).then(producto => {
            console.log(producto.get({
              
            plain: true
            }));
            return res.redirect("/")

          }).catch(error => console.log(error)); 
    
},
searchResults:(req,res) =>{
  let resultadoBusqueda = req.query.search
  db.Productos.findAll({

    where:{[op.or]:[//buscar por marca o modelo o
      {modelo:{[op.like]: resultadoBusqueda}}, //buscar algo parecido 
      {marca:{[op.like]: resultadoBusqueda}},
      //{descripcion:{[op.like]: `${req.query.search}`}},
      
    ]
  },include: [
    //conectamos con el belongsTo
   // {association: "usuarios"},
    //{association: "comentarios"},
  ], })
  .then(resultados =>{
    return res.render("resultadoBusqueda",{"searchResults": resultados, resultadoBusqueda} )
    //return res.redirect("/perfil/profile")
    
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
/*crearComentario: (req,res)=>{
  console.log (req.body)
  const {comentario, fecha} = req.body
  db.Comentarios.create({
    comentario: comentario,
    fecha: fecha,
  })
}*/

comentario: (req, res) => {
  if(req.session.user == undefined){
      return res.redirect(`/perfil/login`)
  }
  else{
      let comentario = {
          texto: req.body.texto,
          producto_id: req.params.id,
          usuario_id: req.session.user.id,
          fecha: new Date()
      }

      db.Comentarios.create(comentario)
                .then(() =>
                    res.redirect(`/productos/detail/${req.params.id}`)
                )
                .catch(err => console.log(`el error es ${err}`))
        }
    },


};



module.exports = productosControlador;


        