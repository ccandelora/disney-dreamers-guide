import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import ReactDom from "react-dom";
import AdsComponent from "./AdsComponent";

function Post(props) {
  console.log(props);
  const [post, setPost] = useState([]);
  const [markdown, setMarkdown] = useState("");
  const imageUrl =
    "https://oyster-app-sus4c.ondigitalocean.app/uploads/" + post.fileName;
  const dataAdSlot = "4104724639";

  useEffect(() => {
    const postApiEndPoint =
      "https://oyster-app-sus4c.ondigitalocean.app/post/" + props.id;
    console.log(postApiEndPoint);
    axios
      .get(postApiEndPoint)
      .then((res) => {
        console.log(res);
        setPost(res.data.post);
        const imageUrl =
          "https://oyster-app-sus4c.ondigitalocean.app/uploads/" +
          res.data.post.fileName;
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
    <div className="row">
    <div className="col-xl-7">
      <article className="blog-post">
        <h1 className="mouse-text">{post.title}</h1>
        <img
          src={imageUrl}
          className="img-fluid markdown-image"
          alt={post.altImageName}
        />
        <ReactMarkdown children={markdown} />
      </article>
      </div>
      <div className="col-xl-4">
        <h1>Ad should be here</h1>
        <AdsComponent dataAdSlot={dataAdSlot} />
      </div>
      </div>
  );
}

export default Post;
