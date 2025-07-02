import React from 'react';
import './SectionFour.css';
import { FaPlay } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="SectionFour">
      <div className="intro">
        <h2
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            fontFamily: '400',
          }}
        >
          <span className="line"></span>Why Choose Us
        </h2>
        <p className="descreption">
          we’re a small, passionate team that cares about every detail.
          <br /> We listen to your needs, build clean and modern software, and
          support you every step of the way.
          <br /> Even though we’re just starting, we work with full focus and
          commitment like your project is our own.
        </p>
        <div className="video">
          <button className="play">
            <FaPlay style={{ fontSize: '15px' }} />
          </button>
          <h1>Watch pref video</h1>
        </div>
      </div>
      <div className="features">
        <div className="feature-card highlighted">
          <h3>User-First Approach</h3>
          <p>We design clean, intuitive interfaces no fluff, just function.</p>
        </div>
        <div className="feature-card">
          <h3>Fast & Focused Team</h3>
          <p>
            Work directly with a passionate dev team that cares about your
            goals.
          </p>
        </div>
        <div className="feature-card">
          <h3>Clean Code, Future Proof</h3>
          <p>Built with scalability and performance in mind.</p>
        </div>
        <div className="feature-card highlighted">
          <h3>We’re Here For You</h3>
          <p>
            Small team = big attention. We treat every project like it’s our
            own.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
