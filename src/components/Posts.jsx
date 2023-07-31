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
        setPosts(res.data.posts.slice(0)
        .reverse());
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
    <div className="row ">
      <div className="container">
        <div className="adsbygoogle">
          <h1>Ad should be here</h1>
          <AdsComponent dataAdSlot={dataAdSlot} />
        </div>
        <div className="row row-cols-2 row-cols-lg-12 align-items-stretch g-3 py-3">
          {posts.map((post) => {
            console.log(post);
            const imageUrl = post.fileName
              ? "https://oyster-app-sus4c.ondigitalocean.app/uploads/" +
                post.fileName
              : "none";
            const postStyle = {
              backgroundImage: `url("${imageUrl}")`,
            };
            const postLink = "/post/" + post.slug;
            const pubDate = new Date(
              Date.parse(post.createdAt)
            ).toLocaleDateString("en-us", {
              day: "numeric",
              month: "numeric",
              year: "numeric",
            });
            const description = textTruncate(post.description, 50, "...");
            console.log(pubDate);

            return (
              <div className="col">
                <a href={postLink} className="text-decoration-none link-dark">
                  <div
                    className="card card-cover h-100  overflow-hidden text-bg-dark rounded-4 shadow-lg card-background"
                    style={postStyle}
                  >
                    <div className="d-flex flex-column w-auto p-5 pb-3 text-white text-shadow-2">
                      <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                        {post.title}
                      </h3>
                      <div className="white-background">
                        <ul className="d-flex list-unstyled mt-auto">
                          <li className="d-flex p-2">
                            <small>{description}</small>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
          ;
        </div>
      </div>
    </div>
  );
}

export default Posts;
