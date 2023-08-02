import React, { useEffect } from 'react'
import Posts from './Posts'
import { Helmet } from "react-helmet-async";

export default function HomeWraper() {
    const setActiveNav = function () {
        const navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });
        const postLink = document.querySelector(".home");
        postLink.classList.add("active");
      };
        useEffect(() => {
            setActiveNav();
        }, []);
  return (
    <div>
      <Posts />
    </div>
  )
}
