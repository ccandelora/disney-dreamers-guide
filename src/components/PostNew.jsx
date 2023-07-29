import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import ReactDom from "react-dom";

function Post(props) {
  console.log(props);
  const [post, setPost] = useState([]);
  const [markdown, setMarkdown] = useState("");
  const imageUrl = "http://localhost:5000/uploads/" + post.fileName;

  useEffect(() => {
    const postApiEndPoint = "http://localhost:5000/post/" + props.id;
    console.log(postApiEndPoint);
    axios
      .get(postApiEndPoint)
      .then((res) => {
        console.log(res);
        setPost(res.data.post);
        const imageUrl =
          "http://localhost:5000/uploads/" + res.data.post.fileName;
        const markdown = res.data.post.body.replace(
          "https://example.com/haunted-mansion-image.jpg",
          imageUrl
        );
        setMarkdown(markdown);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1 className="mouse-text">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;
