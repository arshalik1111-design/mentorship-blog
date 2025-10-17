const mongoose = require('mongoose');

// Define the schema (the structure of a post)
const postSchema = new mongoose.Schema({
     content: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
 
}, { timestamps: true }); // timestamps adds createdAt and updatedAt fields automatically

// Create the model from the schema and export it
const Post = mongoose.model('Post', postSchema);

module.exports = Post;