import React, { useState, useEffect } from "react";
import axios from "axios";

export default function HomeCarousel(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://oyster-app-sus4c.ondigitalocean.app/this-week")
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="" aria-current="true"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4" className=""></button>
      </div>
      <div className="carousel-inner">
        {posts.map((post, idx) => {
          const activeStatus = idx === 0 ? "active" : "";
          const carouselClass = "carousel-item " + activeStatus;
          const imageUrl = post.fileName
            ? "https://cdn.disneydreamersguide.com/uploads/" +
              post.fileName
            : "none";
          const postLink = "/post/" + post.slug;

          return (
          <div className={carouselClass}> 
            <img src={imageUrl} className="opacity-75" width="100%" height="100%" alt={post.title} />
            <div className="container">
              <div className="carousel-caption text-start text-black">
                <h1>{post.title}</h1>
                <p><a className="btn btn-lg btn-primary" href={postLink}>Read More</a></p>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>    
          )
        })}
      </div>
    </div>
  );
}