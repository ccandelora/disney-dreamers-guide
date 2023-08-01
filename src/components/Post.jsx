import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import ReactDom from "react-dom";
import AdsComponent from "./AdsComponent";
import { Helmet } from "react-helmet-async";

function Post(props) {
  const [post, setPost] = useState([]);
  const [markdown, setMarkdown] = useState("");
  const imageUrl =
    "https://oyster-app-sus4c.ondigitalocean.app/uploads/" + post.fileName;
  const dataAdSlot = "4104724639";
  const postLink =
    "https://oyster-app-sus4c.ondigitalocean.app/post/" + post.slug;
  const pubDate = new Date(Date.parse(post.createdAt)).toLocaleDateString(
    "en-us",
    {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    }
  );
  console.log(post);

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
        const script = document.createElement("script");

        script.src =
          "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0&appId=2058140294535510&autoLogAppEvents=1";

        script.async = true;

        script.crossOrigin = "anonymous";

        document.body.appendChild(script);

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
        <div className="col-md-7">
          <article className="blog-post">
            <h1 className="mouse-text">{post.title}</h1>
            <ul>
              <li>
                <small className="text-muted">By {post.author}</small>
              </li>
              <li>
                <small className="text-muted">Published on {pubDate}</small>
              </li>
            </ul>
            <img
              src={imageUrl}
              className="img-fluid markdown-image"
              alt={post.alt}
            />
            <ReactMarkdown children={markdown} />
          </article>
        </div>
        <div className="col-md-4"></div>
      </div>
      <div className="row">
        <div
          class="fb-comments"
          data-href={postLink}
          data-width="900"
          data-numposts="20"
        ></div>
      </div>
    </div>
  );
}

export default Post;
