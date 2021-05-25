const db = require('../database/models')
const Usuario = db.Usuario;
const op = db.Sequelize.Op;

db.Usuario.create({
    
})
let usersControlador = {
    logout: function(req, res){
        req.session.destroy();
        res.clearCookie('userId');
        return res.redirect('/perfil/login')
        //deslogue, rompo sesion, y borro cookie
    },
}
module.exports = usersControlador