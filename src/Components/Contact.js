import React from 'react'

const Contact = () => {
  return (
    <div id="Contact.js" className='contact-page-wrapper'>
        <h1 className='primary-heading'>Have a Question in Mind?</h1>
        <h1 className='primary-heading'> Reach out to us.</h1>

        <div className='contact-form-container'>
            <input type='text' placeholder='info@gmail.com'></input>
            <button className='secondary-button'>Send</button>
        </div>
    </div>
  )
}

export default Contact
