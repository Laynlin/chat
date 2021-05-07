let express = require('express'),
    app = express();

let fs = require('fs'),
    path = require('path'),
    async = require('async');

let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

// Base de données
let listJeux = [
    {id:1, nom:"fortnite"},
    {id:2, nom:"apex"}]


// LIST ROUTE
app.get('/version', function(req, res){
    res.status(200).json({yes : "we can"});
});

// --
app.get("/jeux", function(req, res){
    res.status(200).json(listJeux);
});

// --
app.get("/jeux/:id", function(req, res){
    res.status(200).json(listJeux[req.params.id]);
});

// START SERVER
app.listen(3001, function(){
    console.log('HTTP server started on port 3001');
});
