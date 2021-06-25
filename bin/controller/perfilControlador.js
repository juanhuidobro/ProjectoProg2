const db = require('../database/models');
const op = db.Sequelize.Op;

let perfilControlador = {

    login:  (req, res) =>{ 
        res.render('login')
    },
    profile:  (req, res) =>{ 
        db.Usuarios.findOne({
            where: {id: req.session.usuario.id},
        }).then(usuario => {
            console.log(usuario)
            res.render('profile',{usuario:usuario})
        })
    },
    register:  (req, res) =>{ 
        console.log('entro');
        res.render('register');
    },

}

module.exports = perfilControlador 