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

var options = {
  server: {
    socketOptions: {
      keepAlive: 300000, connectTimeoutMS: 30000
    }
  },
  replset: {
    socketOptions: {
      keepAlive: 300000,
      connectTimeoutMS : 30000
    }
  }
};
//Then put it in here:

if(process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI, options);
} else {

  // Connect to local database
mongoose.connect("mongodb://localhost/foods");
}

module.exports = mongoose;
