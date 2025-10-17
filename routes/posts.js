const express = require('express');
const router = express.Router();
const Post = require('../models/post'); // Import the Post model

// GET all posts (the homepage)
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find({}).sort({ createdAt: -1 }); // Find all posts and sort by newest first
    res.render('home', { posts });
  } catch (err) {
    console.error("Failed to fetch posts", err);
  }
});

// GET the form to create a new post
router.get('/new', (req, res) => {
  res.render('new');
});

// POST a new post
router.post('/', async (req, res) => {
  try {
    const newPost = new Post({
      title: req.body.title,
      content: req.body.content
    });
    await newPost.save(); // Save the new post to the database
    res.redirect('/posts');
  } catch (err) {
    console.error("Failed to create post", err);
  }
});

// GET the form to edit a post
router.get('/:id/edit', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.render('edit', { post });
  } catch (err) {
    console.error("Failed to find post for editing", err);
  }
});

// POST an update to a specific post
router.post('/:id', async (req, res) => {
  try {
    const updatedData = {
      title: req.body.title,
      content: req.body.content
    };
    await Post.findByIdAndUpdate(req.params.id, updatedData);
    res.redirect('/posts');
  } catch (err) {
    console.error("Failed to update post", err);
  }
});

// POST to delete a specific post
router.post('/:id/delete', async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/posts');
  } catch (err) {
    console.error("Failed to delete post", err);
  }
});

module.exports = router;