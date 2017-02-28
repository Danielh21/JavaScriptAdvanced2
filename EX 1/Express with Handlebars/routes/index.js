var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes');


/* GET home page. */
router.get('/', function(req, res, next) {
  var sess = req.session
  var userName = sess.userName;
  res.render('index', { title: 'Express', userName: userName });
});

router.post('/', function(req, res, next){
  // Entry Point for login form
  res.send("Succes");
});

router.get('/joke', function(req, res,next){
  res.render('joke', jokes.getRandomJoke() );
});

router.get('/alljokes', function(req, res,next){
  res.render('alljokes', {allJokes : jokes.allJokes} );
});

router.get('/addjoke', function(req, res,next){
  res.render('addjoke');
});

router.get('/login', function(req,res,next){
res.render('login');
});

router.post('/storejoke', function(req, res, next){
  var newJoke =  req.body.joke;
  jokes.addJoke(newJoke);
  res.send("Succes");
});

router.get("/api/joke/random", function(req,res,next){
    res.send(jokes.getRandomJoke());
});


module.exports = router;