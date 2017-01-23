var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/foods");

var db = mongoose.connection;

// Will log an error if db can't connect to MongoDB
db.on("error", err => {
    console.log(err);
});

// Will log "database has been connected" if it successfully connects.
db.once("open", () => {
    console.log("database has been connected!");
});

var Schema = mongoose.Schema;

//comments Schema will go here

var FoodSchema = new Schema({
  name: String,
  title: String,
  photoUrl: String,
  prepTime: Number,
  cookTime: Number,
  ingredients: String,
  description: String,
  instructions: String,
  mood: Array,
  votes: Number
});



var Food = mongoose.model("Food", FoodSchema);
