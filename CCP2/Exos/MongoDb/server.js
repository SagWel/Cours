const mongoose = require("mongoose");
const express = require("express");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/posts")
  .then(() => console.log("connexion étable ! :)"))
  .catch((err) => console.error("Erreur de connexion:", err));

const postSchema = mongoose.Schema({
  title: String,
  content: String,
  author: String,
  tags: [String],
  comments: [
    {
      user: String,
      text: String,
      date: { type: Date, default: Date.now },
    },
  ],
});

const Post = mongoose.model("Post", postSchema);

app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(articles);
  } catch (error) {}
});

app.post("/posts/new", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const postSaved = await newPost.save();
    res.statut(200).json(postSaved);
  } catch (error) {
    res.satatut(400).json({ message: error.message });
  }
});

app.listen(3000, () => {
  console.error("Connecté au l'URL http://localhost:3000");
});
