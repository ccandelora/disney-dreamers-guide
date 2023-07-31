import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import ReactDom from "react-dom";
import AdsComponent from "./AdsComponent";
import { Helmet } from 'react-helmet-async';

function Post(props) {
  const [post, setPost] = useState([]);
  const [markdown, setMarkdown] = useState("");
  const imageUrl =
    "https://oyster-app-sus4c.ondigitalocean.app/uploads/" + post.fileName;
  const dataAdSlot = "4104724639";
  console.log(post);
  
  useEffect(() => {
    const postApiEndPoint =
      "https://oyster-app-sus4c.ondigitalocean.app/post/" + props.slug;
    console.log(postApiEndPoint);
    axios
      .get(postApiEndPoint)
      .then((res) => {
        console.log('res:');
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
      <Helmet>
      { /* Standard metadata tags */ }
      <title>{post.title}</title>
      <meta name='description' content={post.description} />
      { /* End standard metadata tags */ }
      { /* Facebook tags */ }
      <meta property="og:type" content="article" />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.description} />
      { /* End Facebook tags */ }
      { /* Twitter tags */ }
      <meta name="twitter:creator" content={post.author} />
      <meta name="twitter:card" content="article" />
      <meta name="twitter:title" content={post.title} />
      <meta name="twitter:description" content={post.description} />
      { /* End Twitter tags */ }
    </Helmet>
    <div className="col-md-7">
      <article className="blog-post">
        <h1 className="mouse-text">{post.title}</h1>
        <small className="text-muted">By {post.author}</small>
        <small className="text-muted">Published on {post.pubDate}</small>
        <img
          src={imageUrl}
          className="img-fluid markdown-image"
          alt={post.alt}
        />
        <ReactMarkdown children={markdown} />
      </article>
      </div>
      <div className="col-md-4">
        <h1>Ad should be here</h1>
        <AdsComponent dataAdSlot={dataAdSlot} />
      </div>
      </div>
  );
}

export default Post;
