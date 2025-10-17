const mongoose = require('mongoose');
require('dotenv').config(); // This line loads the .env file

const express = require("express");
const postRoutes = require("./routes/posts");

const app = express();
const port = process.env.PORT || 8080;

// MIDDLEWARE GOES AT THE TOP
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// THEN SET YOUR VIEW ENGINE
app.set("view engine", "ejs");

// THEN DEFINE YOUR ROUTES
app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.redirect("/posts");
});

// FINALLY, START THE SERVER
// Function to connect to DB and start the server
const startServer = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("✅ Successfully connected to MongoDB!");

    // Start the Express server only after a successful connection
    app.listen(port, () => {
      console.log(`🚀 Server is listening on port ${port}`);
    });

  } catch (err) {
    console.error("❌ Failed to connect to MongoDB", err);
  }
};

// Call the function to start everything
startServer();
