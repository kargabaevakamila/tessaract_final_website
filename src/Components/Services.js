import React from 'react'
import PickMeals from '../Assets/comp.png'
import ChooseMeals from '../Assets/AI.png'
import DeliveryMeals from '../Assets/edtech.png'


const Services = () => {
    const servicesInfoData = [
        {
            image:PickMeals,
            title:"Create your webpage",
            text: "Looking for advanced website for your company? Lorem ipsum dolor sit amet."
        },
        {
            image:ChooseMeals,
            title:"FinTech and AI",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur."
        },
        {
            image:DeliveryMeals,
            title:"EdTech",
            text: "Check out our recent Podcast on Hyperdimensional Computing."
        }
    ]

  return (
    <div id="Services.js" className='services-section-wrapper'>
        <div className='services-section-top'>
            <p className='primary-subheading'>Services</p>
            <h1 className='primary-heading'>Survices We Provide</h1>
            <p className="primary-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='services-section-bottom'>
            {
                servicesInfoData.map((data) => (
                    <div className='services-section-info'>
                        <div className='info-boxes-img-container'>
                            <img src={data.image} alt=""></img>
                        </div>
                        
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>

                    </div>    
                ))
            }
        </div>
    </div>
  )
}

export default Services
