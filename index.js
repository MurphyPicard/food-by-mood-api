var express = require("express");
var parser  = require("body-parser");
var mongoose= require("./db/connection");
mongoose.Promise = global.Promise;

var cors = require('cors');
var app     = express();
app.use(cors());
var Food = mongoose.model("Food");

app.set("port", process.env.PORT || 3001);

app.use(parser.json({extended: true})); //to support JSON encoded-bodies
app.use(parser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get("/", function(req, res){
  res.render("foods");
});

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
  console.log("look here");
  console.log(req.body);
  Food.create(req.body).then(function(food){
    console.log(food);
    res.json(food);
  });
});

app.delete("/api/foods/:title", function(req, res){
  Food.findOneAndRemove({title: req.params.title}).then(function(){
    res.json({success: true });
  });
});

app.put("/api/candidates/:title", function(req, res){
  Food.findOneAndUpdate({title: req.params.title}, req.body, {new: true}).then(function(food){
    res.json(food);
  });
});

app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});
