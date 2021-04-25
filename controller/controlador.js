let controlador = {

    index:  (req, res) =>{ // Es la pagina que se va a ver cuando el usuario busque home
        res.render('index')
    },
    product:  (req, res) =>{
        res.render('product')
    },
    productAdd:  (req, res) =>{ 
        res.render('product-add')
    },
    productEdit:  (req, res) =>{ 
        res.render('product-edit')
    },
    
    searchResults:  (req, res) =>{ 
        res.render('search-results')
    },

}
module.exports = controlador; 
