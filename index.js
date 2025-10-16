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
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
