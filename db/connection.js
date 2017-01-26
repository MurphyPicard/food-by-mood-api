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
    mood: String,
    votes: Number
  }
);

var MoodSchema = new mongoose.Schema(
  {
    mood: String,
    foods: [FoodSchema]
  }
);

mongoose.model("Food", FoodSchema);
mongoose.model("Mood", MoodSchema);
mongoose.connect("mongodb://localhost/foods" || process.env.MONGODB_URI);

module.exports = mongoose;
