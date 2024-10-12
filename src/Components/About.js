import React, { useEffect } from 'react';
import AboutBackground from '../Assets/about-background.png';
import AboutBackgroundImage from '../Assets/about-background-image.png';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Scroll-triggered animation for text (slides right and fades out on scroll down)
    gsap.fromTo(".about-section-text-container", 
      { x: 0, opacity: 1 },  // Start state: normal position (right side) and fully visible
      { x: 100, opacity: 0, duration: 2, ease: "power1.inOut",  // End state: slides right and fades out
        scrollTrigger: {
          trigger: ".about-section-container",
          start: "top center",  // Start when the top of the section hits the center of the viewport
          end: "bottom top",    // End when the bottom of the section hits the top of the viewport
          scrub: true,          // Smooth animation tied to scroll progress
          toggleActions: "play none none reverse"  // Reverse when scrolling back up
        }
      }
    );

    // Scroll-triggered animation for both background image and main image (slides left and fades out on scroll down)
    gsap.fromTo([".about-background-image-container", ".about-section-image-container img"], 
      { x: 0, opacity: 1 },  // Start state: normal position (left side) and fully visible
      { x: -100, opacity: 0, duration: 2, ease: "power1.inOut",  // End state: slides left and fades out
        scrollTrigger: {
          trigger: ".about-section-container",
          start: "top center",  // Start when the top of the section hits the center of the viewport
          end: "bottom top",    // End when the bottom of the section hits the top of the viewport
          scrub: true,          // Smooth animation tied to scroll progress
          toggleActions: "play none none reverse"  // Reverse when scrolling back up
        }
      }
    );
  }, []);

  return (
    <div id="About.js" className="about-section-container">
      <div className='about-background-image-container'>
        <img src={AboutBackground} alt="" />
      </div>
      <div className='about-section-image-container'>
        <img src={AboutBackgroundImage} alt='' />
      </div>
      <div className='about-section-text-container'>
        <p className='primary-subheading'>About Us</p>
        <h1 className='primary-heading'>
          We Use The Latest AI Technologies In Our Projects
        </h1>
        <p className='primary-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit adipiscing.
        </p>
        <p className='primary-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.
        </p>
        <div className='about-buttons-container'>
          <button className='secondary-button'>Learn More</button>
          <button className='watch-video-button'>
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
