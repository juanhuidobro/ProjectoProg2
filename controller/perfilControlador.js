const db = require('../database/models');
const op = db.Sequelize.Op;
const Usuarios = db.Usuarios;

let perfilControlador = {

    login:  (req, res) =>{ 
        res.render('login',{errors:{login:''}})
    },
    profile:  (req, res) =>{ 
        db.Usuarios.findByPk(`${req.session.user.id}`,{
            include: [{association: 'comentarios'},{association: 'productos'}]
          })
        .then(resultados => res.render('profile', {usuario:resultados}))
        .catch (err => console.log(err))
    },
    register:  (req, res) =>{ 
        console.log('entro');
        res.render('register');
    },
   
    profileEdit:  (req, res) =>{ 

        if (req.session.user != null ) {
            db.Usuarios.findByPk(`${req.session.user.id}`,{
                include: [{association: 'comentarios'},{association: 'productos'}]
              })
            .then(resultados => res.render('profile-edit', {usuario:resultados}))
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
            Usuarios.destroy({where:{id:primaryKey}})
            .then(resultados => res.render('profile', {resultados}))
            .catch(err => console.log(err))
        },

}



module.exports = perfilControlador 