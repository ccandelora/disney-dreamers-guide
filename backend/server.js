require('dotenv').config({ path: '.env' })
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const PORT = 5000;
const app = express();
const Post = require('./models/Post');
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const mongoose = require("mongoose");

app.use(cors());
const corsOptions = {
    origin: "http://localhost:3000"
};

const queueTimesBase = "https://queue-times.com/en-US/parks";
const requestMagicKingdomWaitTimes = queueTimesBase + "/6/queue_times.json";
const requestEpcotWaitTimes = queueTimesBase + "/7/queue_times.json";
const requestHollywoodStudiosWaitTimes = queueTimesBase + "/8/queue_times.json";
const requestAnimalKingdomWaitTimes = queueTimesBase + "/9/queue_times.json";

mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
const multer = require('multer');
 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
});
 
const upload = multer({ storage: storage });

app.use(express.static("public"));

app.get("/posts", function (req, res) {
    Post.find({}).then((foundPosts) => {
      if (foundPosts.length > 0) {
        res.json({ posts: foundPosts });
        //res.render("home", {
        //  postItems: foundPosts });
      } else {
        console.log('no posts found'); 
        res.render("home", { 
          postItems: [] });
      }
    });
  });
  
  app.get("/compose", function (req, res) {
    res.render("compose");
  });

  app.post("/compose", upload.single('image'), function (req, res) {
    console.log(req.body);
    const postTitle = req.body.postTitle;
    const postBody = req.body.postBody;
    const postAuthor = req.body.postAuthor;
    const postDescription = req.body.postDescription;
    console.log(req.file);
    const postImage = {
        data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
        contentType: 'image/jpg'}
    const postAltImageName = req.body.postAltImageName;
    const post = new Post({
      title: postTitle,
      body: postBody,
      author: postAuthor,
      description: postDescription,
      image: postImage,
      fileName: req.file.filename,
      altImageName: postAltImageName
    });
    post.save();
    console.log("post saved");
    res.redirect("/");
  });
  
  app.get("/post/:postId", function (req, res) {
    const oid = new mongoose.mongo.ObjectId(req.params.postId);
    console.log(oid);
    Post.findOne({_id: oid }).then((postItem) => {
      if (postItem !== null) {
        //res.render("post", {post: postItem});
        res.json({ post: postItem });
      } else {
        console.log("No matching post found");
        res.redirect("/");
      }
    });
  });
  
  

// This function runs if the http://localhost:5000/magigKingdomQueueTimes endpoint
// is requested with a GET request
app.get("/magic-kingdom-data", cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: 'GET'
    }
    const response = await fetch(requestMagicKingdomWaitTimes, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

app.use('/uploads', express.static('uploads'));

connectDB().then(() => {
    app.listen(PORT, function() {
      console.log("listening to requests");
    });
  });