import React, { useEffect } from 'react';
import Navbar from './Navbar';
import BannerImage from "../Assets/home-banner-image.png";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Home = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // First animation on page load (text fades in from below)
    gsap.fromTo(".home-text-section", 
      { y: 100, opacity: 0 },  // Start state (below and invisible)
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }  // End state (normal position, fully visible)
    );

    // First animation on page load (image fades in from the right)
    gsap.fromTo(".home-image-container img", 
      { x: 200, opacity: 0 },  // Start state (off-screen to the right, invisible)
      { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }  // End state (normal position, fully visible)
    );

    // Scroll-triggered animation for text (fades and slides left when scrolling down)
    gsap.fromTo(".home-text-section", 
      { x: 0, opacity: 1 },  // Start state (normal position)
      { x: -100, opacity: 0, duration: 2, ease: "power1.inOut",  // End state (sliding left and fading out)
        scrollTrigger: {
          trigger: ".home-banner-container",
          start: "top center", // Start when the container hits the center of the viewport
          end: "bottom top",   // End when the bottom of the container hits the top of the viewport
          scrub: true,         // Smoothly tied to scroll
          toggleActions: "play none none reverse"  // Reverse when scrolling back up
        }
      }
    );

    // Scroll-triggered animation for image (fades and slides right when scrolling down)
    gsap.fromTo(".home-image-container img", 
      { x: 0, opacity: 1 },  // Start state (normal position)
      { x: 100, opacity: 0, duration: 2, ease: "power1.inOut",  // End state (sliding right and fading out)
        scrollTrigger: {
          trigger: ".home-banner-container",
          start: "top center", // Start when the container hits the center of the viewport
          end: "bottom top",   // End when the bottom of the container hits the top of the viewport
          scrub: true,         // Smoothly tied to scroll
          toggleActions: "play none none reverse"  // Reverse when scrolling back up
        }
      }
    );
  }, []);

  return (
    <div className="home-container">
      <Navbar/>
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Tessaract.<br />
            We Can Help.
          </h1>
          <p className="primary-text">
            Make your websites stronger with us. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="secondary-button">Get to know us</button>
        </div>
        <div className="home-image-container">
          <img src={BannerImage} alt="Banner"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
