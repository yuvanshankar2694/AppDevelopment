import React from 'react'
import '../assets/css/Contact.css'
function Contact() {
  return (
    <div className="contact-us-container">
      <div className="contact-form">
        <h1>Contact Us</h1>
        <p className="contact-description">
          Have questions or need assistance with your mobile device? We're here
          to help! You can reach out to us through the following methods:
        </p>

        <div className="contact-info">
          <div className="contact-details">
            <h2>Contact Information</h2>
            <address>
              <strong>[Your Mobile Service Center]</strong>
              <br />
              Address: [Your Address]
              <br />
              Phone: [Your Phone Number]
              <br />
              Email: [Your Email Address]
            </address>
          </div>

          <div className="contact-form">
            <h2>Contact Form</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
