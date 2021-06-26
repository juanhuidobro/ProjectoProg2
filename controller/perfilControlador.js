let perfilControlador = {

    login:  (req, res) =>{ 
        res.render('login',{errors:{login:''}})
    },
    profile:  (req, res) =>{ 
        res.render('profile')
    },
    register:  (req, res) =>{ 
        console.log('entro');
        res.render('register');
    },

}

module.exports = perfilControlador 