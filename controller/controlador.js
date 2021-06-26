const db = require('../database/models')
var fs = require('fs');
const op = db.Sequelize.Op;

let controlador = {
    index:  (req, res) =>{ 
        console.log('paso por aqui 1');
        // Es la pagina que se va a ver cuando el usuario busque home
        db.Productos.findAll()
            .then((resultados)=> {
                 console.log('paso por aqui 2');
                 res.render('index',{productos:resultados})
            })
            .catch((err)=> console.log(err));
    },
    product:  (req, res) =>{
        db.Productos.findByPk(
            req.params.id
        ).then((resultados)=> res.render('product',{producto:resultados}))
            .catch((err)=> `Error: ${err}`)
    },
    productAdd:  (req, res) =>{
        res.render('product-add');
    },
    productEdit:  (req, res) =>{ 
        res.render('product-edit');
    },
   /* searchResults:  (req, res) =>{ 
        let searchResults = req.query.search
        productos.findAll({
            where: [
                {marca:{[op.like]:`%${searchResults}%` }}
            ]
        })
        .then((resultados)=> res.render('searchResults'),{resultados})
        .catch((err)=> `Error: ${err}`)

        //res.render('search-results')
    },*/
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

}
module.exports = controlador; 
