const db = require('../database/models'); //Se requiere la base de datos exportada en models index.js
const op = db.Sequelize.Op;
const productos = db.Productos;

let productosControlador = { 
  //Metodos que se encargan los request 
  index: (req,res)=>{
    producto.findAll({
    include: [{association: 'usuario'},], // asociamos la tabla usuario con producto fijarse en models Producto.js
    order: [['created_at', 'DESC']]}) // esto es para que los productos agregados esten en descendentes  
      .then((resultados)=> res.render('productos',{resultados}))
      .catch((err)=>`Error:${err}`) //Callback para atrapar un error generado en la promesa
  },
  show: (req,res) =>{
    let primaryKey = req.params.id;
    productos.findByPk (primaryKey,{
      include: [{association: 'usuario'}] // asociamos la tabla usuario con producto fijarse en models Producto.js
    })
    .then (producto => { //Solo si show recibe un resultado luego lo recibe el then dentro de su callback em el parametro producto
        console.log(producto)
        db.Comentarios.findAll({where: {
          producto_id: producto.id //Este producto lo traemos del model, que son todos los comentarios de un solo producto
      },
      include: [
          { association: "usuario" }, // asociamos la tabla usuario con producto fijarse en models Producto.js
        ],order: [
          ['fecha', 'DESC' ] // esto es para las fechas descendentes 
      ],})
      .then (comentarios => {
        ;
        res.render('product',{producto:producto, comentarios:comentarios})})// Renderiza la vista product.ejs 
                              //Objeto literal:nombre utilizado para disponer de la informacion en las vistas
      })
    .catch(err => console.log(err)) //Callback para atrapar un error generado en la promesa
  },
  
    agregarProducto: function(req, res) {
        console.log(req.body);
        const {marca, modelo, descripcion, precio, email} = req.body; 
        
        db.Productos.create({ // agregar a la db
            marca:marca, //contiene los mismos campos que la db
            modelo:modelo,
            imagen: `/images/products/${req.file.filename}`, //para agregar la foto
            descripcion:descripcion,
            precio:precio,
            email:email,
            usuario_id: req.session.user.id // toda informacion que se almacene en session se podra utilizar en todas las paginas
        }).then(producto => {
            console.log(producto.get({
              
            plain: true
            }));
            return res.redirect("/") //Promesa añadida 

          }).catch(error => console.log(error)); 
    
},
searchResults:(req,res) =>{
  let resultadoBusqueda = req.query.search
  db.Productos.findAll({

    where:{[op.or]:[//buscar por marca o modelo o
      {modelo:{[op.like]: resultadoBusqueda}}, //buscar algo parecido 
      {marca:{[op.like]: resultadoBusqueda}},
    
      
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

comentario: (req, res) => {
  if(req.session.user == undefined){
      return res.redirect(`/perfil/login`)
  }
  else{
      let comentario = {
          texto: req.body.texto,
          producto_id: req.params.id,
          usuario_id: req.session.user.id,
          fecha: new Date() //crea un nuevo objeto el cual agregar la fecha para usarlo en la linea 26
      }

      db.Comentarios.create(comentario)
                .then(() =>
                    res.redirect(`/productos/detail/${req.params.id}`)
                )
                .catch(err => console.log(`el error es ${err}`))
        }
    },


};



module.exports = productosControlador; //Exportamos la variable


        