var mongoose  = require("./connection");
var seedData  = require("./seeds");
mongoose.Promise = global.Promise;

var Food = mongoose.model("Food");

Food.remove({}).then(function(){
  Food.collection.insert(seedData).then(function(){
    process.exit();
  });
});
