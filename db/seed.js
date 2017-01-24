var mongoose  = require("./connection");
var seedData  = require("./seeds");

var Food = mongoose.model("Food");

Food.remove({}).then(function(){
  Food.collection.insert(seedData).then(function(){
    process.exit();
  });
});
