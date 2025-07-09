import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { IoMdCall } from 'react-icons/io';
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Emails.css';

function Emails() {
  return (
    <div className="emailSection">
      <div className="leftSection">
        <div className="leftContent">
          <h1>Get in touch</h1>
          <p>
            Have a project in mind? Let’s talk. We’re here to answer your
            questions and help bring your ideas to life.
          </p>
        </div>
        <hr />

        <div className="links">
          <FaLocationDot className="icons" />
          <div className="tobic">
            <h2>Location</h2>
            <p>38 Hesham Labeb Street, Mostafa Alnahas</p>
          </div>
        </div>

        <div className="links">
          <MdEmail className="icons" />
          <div className="tobic">
            <h2>Email Us</h2>
            <p>makpool@makpoolsolutions.com</p>
          </div>
        </div>

        <div className="links">
          <IoMdCall className="icons" />
          <div className="tobic">
            <h2>Call Us</h2>
            <p>010673909260</p>
          </div>
        </div>

        <hr />
        <h2>Follow Our Social Media</h2>
        <div className="logos">
          <FaFacebook className="icons" />
          <FaLinkedin className="icons" />
          <FaWhatsapp className="icons" />
        </div>
      </div>

      <div className="rightSection">
        <div className="rightContent">
  <h1>Send a message</h1>
  <p>Send us a quick message and our team will reach out to you</p>

  <form className="inputs">
    <div className="inputRow">
      <input type="text" placeholder="Your Name" name="name" />
      <input type="text" placeholder="Company Name" name="company" />
    </div>

    <div className="inputRow">
      <input type="tel" placeholder="Phone Number" name="phone" />
      <input type="email" placeholder="Email Address" name="email" />
    </div>

    <div className="inputFull">
      <input type="text" placeholder="Subject" name="subject" />
    </div>

    <div className="inputFull">
      <textarea placeholder="Your Message" name="message" rows="5"></textarea>
    </div>

    <button type="submit">Send Message</button>
  </form>
</div>

      </div>
    </div>
  );
}

export default Emails;
