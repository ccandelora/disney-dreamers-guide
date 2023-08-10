import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://oyster-app-sus4c.ondigitalocean.app/posts")
      .then((res) => {
        setPosts(res.data.posts.slice(0).reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const textTruncate = function (str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = "...";
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };

  return (
    <div className="row">
      <Helmet>
        {/* Standard metadata tags */}
        <title>Disney Dreamer's Guide : Articles</title>
        <meta name="description" content="Information and tips to help planr your next Disney World Vacation." />
        {/* End standard metadata tags */}
        {/* Facebook tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Disney Dreamer's Guide : Articles" />
        <meta property="og:description" content="Information and tips to help planr your next Disney World Vacation." />
        {/* End Facebook tags */}
        {/* Twitter tags */}
        <meta name="twitter:creator" content="Chris Candelora" />
        <meta name="twitter:card" content="website" />
        <meta name="twitter:title" content="Disney Dreamer's Guide : Articles" />
        <meta name="twitter:description" content="Information and tips to help planr your next Disney World Vacation." />
        {/* End Twitter tags */}
      </Helmet>
      {posts.map((post) => {
        const imageUrl = post.fileName
          ? "https://cdn.disneydreamersguide.com/uploads/" +
            post.fileName
          : "none";
        const postLink = "/post/" + post.slug;
        const description = textTruncate(post.description, 160, "...");

        return (
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div
              className="card rounded-4 shadow-lg mb-3"
            >
              <a href={postLink} className="text-decoration-none link-dark">
                <img
                  src={imageUrl}
                  className="card-img-top"
                  alt={post.alt}
                  style={{ height: "17em" }}
                />
                <div className="card-body" style={{height:"350px"}}>
                  <h2 className="card-title">{post.title}</h2>
                  <p className="card-text">{description}</p>
                  <a href={postLink} className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
