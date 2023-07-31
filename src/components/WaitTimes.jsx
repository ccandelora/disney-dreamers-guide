import React, {useEffect} from 'react'
import Feature from './Feature';
import ParkCard from './ParkCard';

function WaitTimes(props) {
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
        <Feature title={props.title} park={props.park}/>
        <ParkCard park={props.park}/>
    </div>
    
  )
}

export default WaitTimes