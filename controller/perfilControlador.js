const db = require('../database/models');
const op = db.Sequelize.Op;
const Usuarios = db.Usuarios;

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
   
    profileEdit:  (req, res) =>{ 

        if (req.session.users != null ) {
            db.Usuarios.findByPk(`${req.session.users.id}`)
            .then(resultados => res.render('profileEdit', {resultados}))
            .catch (err => console.log(err))
        }
           // let primaryKey = req.params.id;
          /* db.usuarios.findByPk(`${req.session.usuarios.id}`)
            .then(resultados => res.render('profileEdit', {resultados}))
            .catch(err => console.log(err))
            res.render('profile') */
        },
    profileDelete:  (req, res) =>{ 
            let primaryKey = req.params.id;
            Usuarios.findByPk(primaryKey)
            .then(resultados => res.render('profileDelete', {resultados}))
            .catch(err => console.log(err))
            res.render('profile')
        },

}



module.exports = perfilControlador 