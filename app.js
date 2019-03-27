//Set up express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req,res){
 res.send("welcome to the world of starwar");
});

app.get('/bye', function(req,res){
 res.send("Goodbye world");
});

app.get('/api', function(req,res){
    res.send(people);
});

app.get('/api/:id',function(req,res){
    res.send(people[req.params.id]);
});

app.post('/api',function(req,res){
    var newpeople = {
        "name":req.body.name,
        "height": req.body.height,
        "mass":req.body.mass,
        "hair_color":req.body.hair_color,
        "skin_color":req.body.skin_color,
        "eye_color":req.body.eye_color,
        "birth_year":req.body.birth_year,
        "gender":req.body.gender
    };
    people.push(newpeople);
    res.send(newpeople);
});

app.post('/api/:id',function(req,res){
    var newpeople = {
        "name":req.body.name,
        "height": req.body.height,
        "mass":req.body.mass,
        "hair_color":req.body.hair_color,
        "skin_color":req.body.skin_color,
        "eye_color":req.body.eye_color,
        "birth_year":req.body.birth_year,
        "gender":req.body.gender
    };
    people[req.params.id]=newpeople;
    res.send(newpeople);
});

app.delete('/api/delete/:id', function(req,res){
    if(req.params.id<=people.length-1){
        people.splice(req.params.id,1);
    }
    res.send(people);
});

app.listen(3000, function(){
    console.log('Express serving at port 3000');
});

var people =
    [
    {
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male"
},
    {
        "name": "C-3PO",
        "height": "167",
        "mass": "75",
        "hair_color": "n/a",
        "skin_color": "gold",
        "eye_color": "yellow",
        "birth_year": "112BBY",
        "gender": "n/a"
    },
    {
        "name": "R2-D2",
        "height": "96",
        "mass": "32",
        "hair_color": "n/a",
        "skin_color": "white, blue",
        "eye_color": "red",
        "birth_year": "33BBY",
        "gender": "n/a"
    },
    {
        "name": "Darth Vader",
        "height": "202",
        "mass": "136",
        "hair_color": "none",
        "skin_color": "white",
        "eye_color": "yellow",
        "birth_year": "41.9BBY",
        "gender": "male"
    },
    {
        "name": "Leia Organa",
        "height": "150",
        "mass": "49",
        "hair_color": "brown",
        "skin_color": "light",
        "eye_color": "brown",
        "birth_year": "19BBY",
        "gender": "female"
    },
    {
        "name": "Owen Lars",
        "height": "178",
        "mass": "120",
        "hair_color": "brown, grey",
        "skin_color": "light",
        "eye_color": "blue",
        "birth_year": "52BBY",
        "gender": "male"
    }
    ];

