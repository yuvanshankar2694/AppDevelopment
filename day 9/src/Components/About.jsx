import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/About.css'
const About = () => {
  return (
    <div className="about-us-container">
      <section className="about-section">
        <h1 className="about-heading">About Us</h1>
        <p className="about-paragraph">
          At <strong>[Your Mobile Service Center]</strong>, we are dedicated to
          providing top-tier mobile device care and support. With years of
          experience and a passion for technology, we have become a trusted name
          in the industry.
        </p>
      </section>

      <section className="story-section">
        <h2 className="section-heading">Our Story</h2>
        <p className="section-paragraph">
          <strong>[Your Mobile Service Center]</strong> was founded with a
          simple yet powerful idea: to make mobile care accessible and
          hassle-free for everyone. Our journey began when a group of tech
          enthusiasts recognized the need for reliable mobile device solutions.
        </p>
        <p className="section-paragraph">
          Over the years, we have grown from a small repair shop to a
          comprehensive mobile care hub. Our commitment to excellence, customer
          satisfaction, and innovation has propelled us to where we are today.
        </p>
      </section>

      <section className="mission-section">
        <h2 className="section-heading">Our Mission</h2>
        <p className="section-paragraph">
          <strong>Empowering Mobile Lives</strong>
        </p>
        <p className="section-paragraph">
          Our mission is to empower individuals and businesses by keeping their
          mobile devices in peak condition. We believe that mobile devices are
          more than gadgets; they are essential tools that connect us, entertain
          us, and enrich our lives.
        </p>
      </section>

      <section className="what-sets-us-apart-section">
        <h2 className="section-heading">What Sets Us Apart</h2>
        <div className="row">
          <div className="col-md-6">
            <ul className="section-list">
              <li>
                <strong>Expert Technicians:</strong> Our team consists of highly
                skilled and certified technicians who are passionate about
                mobile technology. They undergo continuous training to stay at
                the forefront of industry advancements.
              </li>
              <li>
                <strong>Quality Service:</strong> We take pride in delivering
                quality service with precision and care. From screen repairs to
                software troubleshooting, we handle every job with the utmost
                professionalism.
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="section-list">
              <li>
                <strong>Transparency:</strong> We believe in open and honest
                communication. When you trust us with your mobile device, you
                can expect transparency in pricing, repair processes, and
                turnaround times.
              </li>
              <li>
                <strong>Customer-Centric Approach:</strong> Your satisfaction is
                our priority. We listen to your needs, answer your questions,
                and work tirelessly to meet and exceed your expectations.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sustainability-section">
        <h2 className="section-heading">Sustainability Commitment</h2>
        <p className="section-paragraph">
          At <strong>[Your Mobile Service Center]</strong>, we are committed to
          responsible mobile care. We believe in reducing e-waste and promoting
          environmentally friendly practices. We recycle and dispose of
          electronic waste responsibly to protect our planet for future
          generations.
        </p>
      </section>

      <section className="community-section">
        <h2 className="section-heading">Join Our Community</h2>
        <p className="section-paragraph">
          We invite you to join our community of mobile enthusiasts. Together,
          we explore the latest tech trends, share tips and tricks, and
          celebrate the endless possibilities of mobile devices.
        </p>
      </section>

      <section className="contact-section">
        <h2 className="section-heading">Contact Us</h2>
        <p className="section-paragraph">
          Got questions or need assistance with your mobile device? Our support
          team is just a message or a phone call away. We're here to assist you.
        </p>
      </section>
    </div>
  )
}

export default About