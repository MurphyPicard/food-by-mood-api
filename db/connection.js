var mongoose  = require("mongoose");

var FoodSchema = new mongoose.Schema(
  {
    title: String,
    photoUrl: String,
    prepTime: Number,
    cookTime: Number,
    ingredients: String,
    description: String,
    instructions: String,
    mood: Array,
    votes: Number
  }
);

mongoose.model("Food", FoodSchema);
mongoose.connect("mongodb://localhost/foods");

module.exports = mongoose;
