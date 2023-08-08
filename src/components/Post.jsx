import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import ReactDom from "react-dom";
import AdsComponent from "./AdsComponent";
import { Helmet } from "react-helmet-async";
import { FacebookProvider, Comments } from "react-facebook";
import FacebookLikeShare from "./FacebookLike";

function Post(props) {
  const [post, setPost] = useState([]);
  const [markdown, setMarkdown] = useState("");
  const imageUrl =
    "https://oyster-app-sus4c.ondigitalocean.app/uploads/" + post.fileName;
  const dataAdSlot = "4104724639";
  const postLink = "https://www.disneydreamersguide.com/post/" + post.slug;
  const pubDate = new Date(Date.parse(post.createdAt)).toLocaleDateString(
    "en-us",
    {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    }
  );

  useEffect(() => {
    const postApiEndPoint =
      "https://oyster-app-sus4c.ondigitalocean.app/post/" + props.slug;
    console.log(postApiEndPoint);
    axios
      .get(postApiEndPoint)
      .then((res) => {
        console.log("res:");
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
    <div className="container">
      <div className="row">
        <Helmet>
          {/* Standard metadata tags */}
          <title>{post.title}</title>
          <meta name="description" content={post.description} />
          {/* End standard metadata tags */}
          {/* Facebook tags */}
          <meta property="og:type" content="article" />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.description} />
          <meta property="og:image" content={imageUrl} />
          <meta property="og:url" content={postLink} />
          {/* End Facebook tags */}
          {/* Twitter tags */}
          <meta name="twitter:creator" content={post.author} />
          <meta name="twitter:card" content="article" />
          <meta name="twitter:title" content={post.title} />
          <meta name="twitter:description" content={post.description} />
          {/* End Twitter tags */}
        </Helmet>
        <div className="">
          <article className="blog-post">
            <h1 className="mouse-text">{post.title}</h1>
            <p>
              <small className="text-muted">By {post.author}</small> |{" "}
              <small className="text-muted">Published on {pubDate}</small>
            </p>
            <img
              src={imageUrl}
              className="img-fluid markdown-image"
              alt={post.alt}
            />
            <FacebookLikeShare link={postLink} />
            <ReactMarkdown children={markdown} />
          </article>
          <FacebookProvider appId="2058140294535510">
            <div
              className="comment"
              style={{
                backgroundColor: "white",
                padding: "10px",
                margin: "10px",
              }}
            >
              <Comments href={postLink} />
            </div>
          </FacebookProvider>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Post;
