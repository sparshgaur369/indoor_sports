// const { MongoClient } = require("mongodb");
// const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);
// require("dotenv").config();

// const client = mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//   })
//   .then(() => {
//     console.log("DB connected");
//   })
//   .catch((error) => {
//     console.log("Error: ", error);

//     return error;
//   });

// module.exports = client;









const mongoose = require("mongoose");
require("dotenv").config(); // Ensure environment variables are loaded

// Optional: Disable deprecation warnings
mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    // Connect to MongoDB using Mongoose
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true, // Add unified topology for better connection handling
    });
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process if unable to connect
  }
};

connectDB();

module.exports = mongoose; // Export Mongoose for use in other files
