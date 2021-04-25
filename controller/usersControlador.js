
let usersControlador = {
    logout: function(req, res){
        req.session.destroy();
        res.clearCookie('userId');
        return res.redirect('/perfil/login')
        //deslogue, rompo sesion, y borro cookie
    },

}


module.exports = usersControlador