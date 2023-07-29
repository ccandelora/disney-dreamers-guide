import React, {useEffect} from 'react'
import Feature from './Feature';
import LandCard from './LandCard';

function WaitTimes() {
    const setActiveNav = function () {
        const navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });
        const postLink = document.querySelector(".wait-times");
        postLink.classList.add("active");
      }
        useEffect(() => {
            setActiveNav();
        }, []);
  return (
    <div>
        <Feature />
        <LandCard />
    </div>
    
  )
}

export default WaitTimes