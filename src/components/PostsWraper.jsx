import React, {useEffect} from "react";
import Posts from "./Posts";
import { Helmet } from "react-helmet-async";

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
  return (
    <div className="row">
      <Posts  />
    </div>
  );
}
