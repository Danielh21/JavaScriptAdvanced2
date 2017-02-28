var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.listen(3000, ()=>{
console.log("Server Started Listing on: " + 3000);
})

app.use( "/api/calculator/:operation/:n1/:n2" , function (req,res,next){
   let calculatorRequest ={
   operation :  req.params.operation,
   n1 : req.params.n1,
   n2 : req.params.n2
                          };
  req.calObject = calculatorRequest; 
   next();
})
app.use(bodyParser.urlencoded({extended: false})) ;


app.get("/api/calculator/:operation/:n1/:n2", (req,res)=>{

var calObject = req.calObject;

var calculation = eval(calObject.n1 + calObject.operation + calObject.n2);

console.log("calculation is : " + calculation);

res.send("Calculation is: " + calculation);
})