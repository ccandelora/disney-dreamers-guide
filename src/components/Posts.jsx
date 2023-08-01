import React, { useState, useEffect } from "react";
import axios from "axios";
import AdsComponent from "./AdsComponent";

function Posts() {
  const [posts, setPosts] = useState([]);
  const dataAdSlot = "3261318770";

  useEffect(() => {
    axios
      .get("https://oyster-app-sus4c.ondigitalocean.app/posts")
      .then((res) => {
        console.log(res);
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
      {posts.map((post) => {
        console.log(post);
        const imageUrl = post.fileName
          ? "https://oyster-app-sus4c.ondigitalocean.app/uploads/" +
            post.fileName
          : "none";
        const postLink = "/post/" + post.slug;
        const pubDate = new Date(Date.parse(post.createdAt)).toLocaleDateString(
          "en-us",
          {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          }
        );
        const description = textTruncate(post.description, 160, "...");
        console.log(pubDate);

        return (
          <div className="col col-6" style={{width:"350px"}}>
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
