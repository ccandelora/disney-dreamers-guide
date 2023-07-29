import React, {useEffect} from "react";
import { useParams} from "react-router-dom";
import Post from "./Post";

export default function PostWraper() {
    const setActiveNav = function () {
        const navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });
        const postLink = document.querySelector(".articles");
        postLink.classList.add("active");
      };
        useEffect(() => {
            setActiveNav();
        }, []);
  const { id } = useParams();
  return (
    <div>
      <Post id={id} />
    </div>
  );
}
