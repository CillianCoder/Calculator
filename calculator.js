const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));


app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
    
    var Weight =parseFloat(req.body.weight);
    var Height =parseFloat(req.body.height);

    var bmi = Weight / (Height*Height);

    res.send("Your BMI is "+bmi);
});

app.listen(3000, function(){
    console.log("server 3000 is running!");
});