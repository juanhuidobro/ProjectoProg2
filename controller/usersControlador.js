const db = require('../database/models')
const Usuario = db.Usuarios;
const op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');
const saltRounds = 10;

// db.Usuario.create({
    
// })
let usersControlador = {
    logout: function(req, res){
        req.session.destroy();
        res.clearCookie('userId');
        return res.redirect('/perfil/login')
        //deslogue, rompo sesion, y borro cookie
    },
    login: function(req, res){
        const {email,password} = req.body;
        console.log(req.body);

        Usuario.findOne({
            where: {email: email},
        }).then(usuario => {
            bcrypt.compare(password, usuario.password, function(err, result) {
                if(result)
                    return res.redirect('/');
                else
                    return res.redirect('/perfil/login');                
            });
        })

    }, 

    /*login: function(req, res){
        //const {email,password} = req.body;
        //console.log(req.body);
        Usuario.findOne({
            where:{email: req.body.email},
        }).then(Usuario => {
            if(user == null){
                errors.login = "email es incorrecto"
                res.locals.error = errors
               // return res.render ('users')
               return res.redirect('/perfil/login')

            } else if(bcrypt.compareSync(req.body.password, usuario.password) == false){ 
                        errors.login ="password es incorrecta";
                        res.locals.error =errors;
                        //return res.render('users');
                        return res.redirect('/perfil/login')
                }else {
                    req.session.user =user;
                    if (req.body.rememberme != undefined){
                        res.cookie('userID', user.id,{maxAge: 1000 * 60 * 5});
                    }
                    
                }
                return res.redirect('/')
        })
        .catch (err => console.log(err))
        },*/

    registrarUsuario: function(req, res){
        console.log(req.body);
        const {nombre, apellido, fechaDeNacimiento,edad, email,  password, passwordConfirm} = req.body;


        bcrypt.hash(password, saltRounds, function(err, passwordHash) {
            console.log('passowrdHash:',passwordHash)
            Usuario.create({
                nombre: nombre,
                apellido: apellido,
                fechaDeNacimiento: fechaDeNacimiento,
                edad: edad,
                email: email,
                password: passwordHash,
            }).then(usuario => {
                // let's assume the default of isAdmin is false:
                console.log(usuario.get({
                  plain: true
                }))
                res.redirect('/perfil/login')
              }).catch(error => console.log(error));
        });
        
          
    },
}
module.exports = usersControlador