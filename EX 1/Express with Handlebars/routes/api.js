var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes');


router.get("/api/joke/random", function(req,res,next){
    res.send(jokes.getRandomJoke);
});

