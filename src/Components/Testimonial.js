import React from 'react'
import ProfilePic from '../Assets/airbnb.png'
import { AiFillStar } from 'react-icons/ai'

const Testimonial = () => {
  return <div id="Testimonial.js" className='services-section-wrapper'>
    <div className='services-section-top'>
        <p className='primary-subheading'>Our Clients</p>
        <h1 className='primary-heading'>What they are saying</h1>
        <p className='primary-text'>Lorem ipsum dolor sit amet consectetur. Non tincidunt 
magna non et elit. Dolor  turpis molestie dui
magnis facilisis at fringilla quam.</p>
    </div>
    <div className='testimonial-section-bottom'>
        <img src={ProfilePic} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt 
magna non et elit. Dolor  turpis molestie dui
magnis facilisis at fringilla quam.</p>
    
        <div className='testimonials-stars-container'>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
        </div>
        <h2>Airbnb</h2>
    </div>
  </div>
}

export default Testimonial
