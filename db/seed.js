var mongoose  = require("./connection");
var seedData  = require("./seeds");
var moodData  = require("./moods");

var Food = mongoose.model("Food");
var Mood = mongoose.model("Mood");

Food.remove({}).then(function(){
  Food.collection.insert(seedData).then(function(){
    process.exit();
  });
});

Mood.remove({}).then(function(){
  Mood.collection.insert(moodData).then(function(){
    process.exit();
  });
});
