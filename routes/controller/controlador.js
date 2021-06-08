const db = require('../database/models')

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
            .catch((err)=> `Error: ${err}`);
    },
    product:  (req, res) =>{
        db.Productos.findByPk(
            req.params.id
        ).then((resultados)=> res.render('product',{producto:resultados}))
            .catch((err)=> `Error: ${err}`)
    },
    productAdd:  (req, res) =>{ 
        db.product.create();
        return res.render('product-add')
    },
    productEdit:  (req, res) =>{ 
        res.render('product-edit')
    },
    
    searchResults:  (req, res) =>{ 
        let searchResults = req.query.search
        productos.findAll({
            where: [
                {marca:{[op.like]:`%${searchResults}%` }}
            ]
        })
        .then((resultados)=> res.render('searchResults'),{resultados})
        .catch((err)=> `Error: ${err}`)

        //res.render('search-results')
    },

}
module.exports = controlador; 
