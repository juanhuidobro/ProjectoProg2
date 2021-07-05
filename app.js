var createError = require('http-errors');
var express = require('express'); //Se requieren los modulos (son los archivos js)
var path = require('path');
let session = require('express-session'); //Se requiere la session
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let db = require('./database/models') //Se requiere la base de datos

var indexRouter = require('./routes/index'); 
var usersRouter = require('./routes/users');
var productosRouter = require('./routes/productos');
var home = require('./routes/home');
var perfilRouter = require('./routes/perfil');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session(
  { secret:'proyecto_parcial',
    resave: false,
    saveUninitialized: true }
));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  if(req.session.user != undefined){
    res.locals.user = req.session.user
  }
  return next()
})

app.use(function(req, res, next){
  if(req.cookies.userId != undefined && req.session.user == undefined){ 
    db.User.findByPk(req.cookies.userId)
      .then(function(user){
        req.session.user = user;
        res.locals.user = user;
        return next();
      })
      .catch(e => console.log(e))
  } else {
    return next();
  }
  
}); 

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productosRouter);
app.use('/home', home);
app.use('/perfil', perfilRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
