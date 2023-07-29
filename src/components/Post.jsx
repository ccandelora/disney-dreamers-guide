import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import ReactDom from "react-dom";
import AdsComponent from "./AdsComponent";

function Post(props) {
  console.log(props);
  const [post, setPost] = useState([]);
  const [markdown, setMarkdown] = useState("");
  const imageUrl = "http://localhost:5000/uploads/" + post.fileName;
  const dataAdSlot = "4104724639";

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
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row align-items-center g-5 py-5">
        <div className="col-lg-6">
          <h1 className="mouse-text">{post.title}</h1>
          <img
            src={imageUrl}
            className="img-fluid markdown-image"
            alt={post.altImageName}
          />
          <ReactMarkdown children={markdown} />
        </div>
        <div className="col-lg-3">
          <h1>Ad should be here</h1>
          <AdsComponent dataAdSlot={dataAdSlot} />
        </div>
      </div>
    </div>
  );
}

export default Post;
