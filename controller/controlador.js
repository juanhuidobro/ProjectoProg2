const db = require('../database/models')

const op = db.Sequelize.Op;

let controlador = {

    index:  (req, res) =>{ 
        console.log('paso por aqui');
        // Es la pagina que se va a ver cuando el usuario busque home
        db.Productos.findAll()
            .then((resultados)=> {
                return res.render('index',{productos:resultados})
            })
            .catch((err)=> `Error: ${err}`);
    },
    product:  (req, res) =>{
        db.productos.findAll({
            limit: 10
        })
            .then((resultados)=> res.render('productos'),{resultados})
            .catch((err)=> `Error: ${err}`)
        //res.render('product')
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
