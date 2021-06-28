const db = require('../database/models')
const Usuario = db.Usuarios;
const op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');
const saltRounds = 10;


let usersControlador = {
 
    login: function(req, res){
       
        Usuario.findOne({
            where:{email: req.body.email},
        }).then(user => {
            console.log(user);
            let errors ={login:''};
            if(user == null){
                errors.login = "email es incorrecto";
                res.locals.error = errors;
              
               return res.render('login',{errors:errors});

            } else if(bcrypt.compareSync(req.body.password, user.password) == false){ 
                        errors.login ="password es incorrecta";
                        res.locals.error =errors;
                        
                        return res.render('login',{errors:errors})
                }else {
                    req.session.user =user;
                    if (req.body.rememberme != undefined){
                        res.cookie('userID', user.id,{maxAge: 1000 * 60 * 5});
                    }
                    
                }
                return res.redirect('/')
        })
        .catch (err => console.log(err))
        },

        /*registrarUsuario: function(req, res){
            console.log(req.body);
            const {nombre, apellido, fechaDeNacimiento, edad, email, password, passwordConfirm} = req.body;

            if (email == " ") { // Si el email esta vacio 
                let errors = {};
                errors.register = "Email no puede estar vacio"; // errors.register o errors.registrar
                res.locals.errors = errors
                return res.render ('users'); //users o perfil

            } else if (req.body.password == " ") { //Si la password esta vacia
                error.register = "Password no puede estar vacio"; // errors.register o errors.registrar
                res.locals.errors = errors
                return res.render ('users'); //users o perfil

            } else if (req.body.passwordConfirm == " ") { //Si la password esta vacia
                error.register = "Confirmar password no puede estar vacio"; // errors.register o errors.registrar
                res.locals.errors = errors
                return res.render ('users'); //users o perfil

            } else {
                Usuario.findOne ({
                    where: [{email:email}]
                }) .then (Usuario => {
                    if (Usuario != null) {
                        errors.register = "Email ya existe";
                        res.locals.errors = errors
                        return res.render ('users'); //users o perfil
                    } else if (password != passwordConfirm) {
                        errors.register = "Los passwords no coinciden";
                        res.locals.errors = errors
                        return res.render ('users'); //users o perfil
                    } else {
                        bcrypt.hashSync (password, saltRounds, function(err, passowrdHash) {
                            console.log('passwordHash: passwordHash');
                            Usuario.create ({
                                nombre: nombre,
                                apellido: apellido,
                                fechaDeNacimiento: fechaDeNacimiento,
                                edad: edad,
                                email: email,
                                passowrd: passowrdHash,
                                avatar: req.file.filename
                            })
                        }) .then (Usuario => {
                           // console.log(usuario.get({
                           // plain: true 
                        })
                        res.redirect ('/perfil/registrarUsuario')
                    }
                }) .catch (err => console.log(err))
            } 
            
        }, */

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
               // avatar: req.file.filename
            }).then(usuario => {
                // let's assume the default of isAdmin is false:
                console.log(usuario.get({
                  plain: true
                }))
                res.redirect('/perfil/login')
              }).catch(error => console.log(error));
        });
        
          
    }, 

    logout: function(req, res){
        req.session.destroy();
        res.clearCookie('userId');
        return res.redirect('/perfil/login')
        //deslogue, rompo sesion, y borro cookie
    }, 
}
module.exports = usersControlador