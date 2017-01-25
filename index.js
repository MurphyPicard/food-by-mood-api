var express = require("express");
var parser  = require("body-parser");
var mongoose= require("./db/connection");

var cors = require('cors');
var app     = express();
app.use(cors());
var Food = mongoose.model("Food");

app.set("port", process.env.PORT || 3001);

app.use(parser.json({extended: true})); //to support JSON encoded-bodies
app.use(parser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


//added in for review
app.get("/api/moods", function(req, res){
  Mood.find({}).then(function(moods){
    res.json(moods);
  });
});
//added in for review
app.get("/api/moods/:title", function(req, res){
  Mood.findOne({title: req.params.title}).then(function(mood){
    res.json(mood);
  });
});
////////////////////////

app.get("/api/foods", function(req, res){
  Food.find({}).then(function(foods){
    res.json(foods);
  });
});

app.get("/api/foods/:title", function(req, res){
  Food.findOne({title: req.params.title}).then(function(food){
    res.json(food);
  });
});

app.post("/api/foods", function(req, res){
  Food.create(req.body).then(function(food){
    res.json(food);
  });
});

app.delete("/api/foods/:title", function(req, res){
  Food.findOneAndRemove({title: req.params.title}).then(function(){
    res.json({success: true });
  });
});

app.put("/api/foods", function(req, res){
  console.log("this is req.body: " + req.body);
  Food.findOneAndUpdate({_id: req.body._id}, req.body)
  .then(function(food){
    res.json(req.body);
  });
});

app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});
