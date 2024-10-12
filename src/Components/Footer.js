import React from 'react'
import Logo from '../Assets/Logo.png'
import { BsTwitterX } from 'react-icons/bs'
import {SiLinkedin} from 'react-icons/si'
import { BsYoutube } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer-section-one'>
        <div className='footer-logo-container'>
            <img src={Logo} alt=''/>
        </div>
        <div className='footer-icons'>
            <BsTwitterX/>
            <SiLinkedin/>
            <BsYoutube/>
            <FaFacebookF/>
        </div>
      </div>


      <div className='footer-section-two'>
        <div className='footer-section-columns'>
            <span>Help</span>
            <span>Contact Us</span>
            <span>Partners</span>
            <span>Projects</span>
        </div>

        <div className='footer-section-columns'>
            <span>09090909</span>
            <span>info@gmail.com</span>
        </div>

        <div className='footer-section-columns'>
            <span>Terms & Conditions</span>
            <span>Privacy & Policy</span>
        </div>

      </div>


    </div>
  )
}

export default Footer
