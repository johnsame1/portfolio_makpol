import React from 'react';
import './About.css';
import image from '../../assets/man.png';

function About() {
  return (
    <div className="sectionAbout">
      <h1 className='title'>About Us</h1>

      <div className="header">
        Our journey began in 2025 when a small group of developers and
        designers united around one belief: that software should solve real
        problems, not create new ones.
      </div>

      <div className="containerAbout">
        <div className="contentAbout">
          {/* Left Image */}
          <div className="contentLeft">
            <div className="imageWrapper">
              <img className="image" src={image} alt="About" />
            </div>
          </div>

          {/* Middle Line */}
          <div className="coulmnLine">
            <div className="line1"></div>
            <span className="year">2025</span>
            <div className="line2"></div>
          </div>

          {/* Right Text */}
          <div className="contentRight">
            <h1>Our Growth Journey</h1>
            <p className="topic">
              We’re a newly launched software company with a clear mission: to
              build smart, reliable, and human-centered digital products.
            </p>
          </div>
        </div>
        <div className='rotated-box'></div>
      <div className='rotated-box2'></div>
      </div>
    </div>
  );
}

export default About;
