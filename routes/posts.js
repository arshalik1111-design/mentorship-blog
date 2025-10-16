const path = require("path");

const fs = require("fs");
const { v4: uuidv4 } = require("uuid"); // v4 is the function that generates the ID
const express = require("express");
const router = express.Router();
const postsFilePath = path.join(__dirname, "..", "posts.json");
let posts = [];
try {
  const data = fs.readFileSync("posts.json", "utf8");
  posts = JSON.parse(data);
} catch (err) {
  console.error("Error reading posts.json, starting with an empty array.", err);
}

router.get("/", (req, res) => {
 res.render("home", { posts: [...posts].reverse() });
});
router.post("/:id", (req, res) => {
  const postToUpdate = req.params.id;

  const updateTitle = req.body.title;
  const updateContent = req.body.content;

  const updatedPost = posts.find((post) => post.id === postToUpdate);
  updatedPost.title = updateTitle;
  updatedPost.content = updateContent;
  fs.writeFileSync("posts.json", JSON.stringify(posts, null, 2));
  res.redirect("/posts");
});

router.post("/", (req, res) => {
  const newPostTitle = req.body.title;
  const newPostContent = req.body.content;

  const newPost = {
    title: newPostTitle,
    content: newPostContent,
    id: uuidv4(),
  };
  posts.push(newPost);
  fs.writeFileSync("posts.json", JSON.stringify(posts, null, 2));
  res.redirect("/posts");
});

router.post("/:id/delete", (req, res) => {
  const idToDelete = req.params.id;

  const newPosts = posts.filter((post) => post.id !== idToDelete);
  posts = newPosts;
  fs.writeFileSync("posts.json", JSON.stringify(posts, null, 2));
  res.redirect("/posts");
});

router.get("/:id/edit", (req, res) => {
  const idToEdit = req.params.id;
  const postToEdit = posts.find((post) => post.id === idToEdit);
  res.render("edit", { post: postToEdit });
});

router.get("/new", (req, res) => {
  res.render("new");
});

module.exports = router;
