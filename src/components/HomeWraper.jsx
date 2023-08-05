import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import HomeCarousel from './HomeCarousel';
import HomeCallTos from './HomeCallTos';

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
    <div className="white-bg">
      <Helmet>
        {/* Standard metadata tags */}
        <title>Disney Dreamer's Guide : Articles</title>
        <meta name="description" content="Information and tips to help planr your next Disney World Vacation." />
        {/* End standard metadata tags */}
        {/* Facebook tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Disney Dreamer's Guide : Articles" />
        <meta property="og:description" content="Information and tips to help planr your next Disney World Vacation." />
        <meta property="og:url" content="http://localhost:3000" />
        {/* End Facebook tags */}
        {/* Twitter tags */}
        <meta name="twitter:creator" content="Chris Candelora" />
        <meta name="twitter:card" content="website" />
        <meta name="twitter:title" content="Disney Dreamer's Guide : Articles" />
        <meta name="twitter:description" content="Information and tips to help planr your next Disney World Vacation." />
        {/* End Twitter tags */}
      </Helmet>
      <HomeCarousel/>
      <HomeCallTos className="m-t-4"/>
    </div>
  )
}
