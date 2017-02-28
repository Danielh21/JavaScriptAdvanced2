var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require("express-session");
var hbs  = require('express-hbs');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret:'secret_3162735',saveUninitialized:true, resave: true}));

app.use(express.static(path.join(__dirname, 'public')));




// Custom Session Handling

app.use(function( req , res , next ) {
var sess = req.session
if(sess.userName != null){
  next();
}
else{
 var userName = req.body.userName;
 if(userName != null){
   sess.userName = userName;
   next();
 }
 else{
   req.url= "/login";
   return next();
 }
}

});

// Just for API:

app.use('/api', function(req, res, next) {
  var sess = req.session
  var userName = sess.userName;
  if(userName != null){
      next();
  }
  else{
      // Properly won't get that far!
     req.url= "/login";
  }
});

app.use('/', index);
app.use('/users', users);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
