let perfilControlador = {

    login:  (req, res) =>{ 
        res.render('login')
    },
    profile:  (req, res) =>{ 
        res.render('profile')
    },
    register:  (req, res) =>{ 
        res.render('register')
    },

}

module.exports = perfilControlador 