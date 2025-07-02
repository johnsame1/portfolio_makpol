import React from 'react';
import './SliderCart.css';
import testimonials from '../../assets/data';
import image from '../../assets/man.jpg';
import { FaComments } from 'react-icons/fa';

const App = () => (
  <div className="sliderContainer">
    <div className="head">
      <h1>
        {' '}
        <FaComments style={{ color: '#525CA9', marginRight: '5px' }} />
        What Our Clients Say
      </h1>
      <p
        style={{
          color: '#888888',
          margin: '0',
          marginBottom: '25px',
          marginLeft: '40px',
          fontWeight: '400',
        }}
      >
        We’re proud to build strong relationships with our clients
      </p>
    </div>
    <div className="slider">
      <div className="sliderContentRight">
        {[...testimonials, ...testimonials, ...testimonials].map(
          (item, index) => (
            <div key={index} className="card">
              <div className="title">
                <img src={image} alt={item.name} className="clientImage" />
                <div className="titleContainer">
                  <h3 style={{ margin: '0' }}>{item.name}</h3>
                  <p className="job">{item.job}</p>
                </div>
              </div>
              <p className="comment">"{item.comment}"</p>
              <p className="date">{item.date}</p>
            </div>
          )
        )}
      </div>
    </div>
    <div className="slider">
      <div className="sliderContentLeft">
        {[...testimonials, ...testimonials, ...testimonials].map(
          (item, index) => (
            <div key={index} className="card">
              <div className="title">
                <img src={image} alt={item.name} className="clientImage" />
                <div className="titleContainer">
                  <h3 style={{ margin: '0' }}>{item.name}</h3>
                  <p className="job">{item.job}</p>
                </div>
              </div>
              <p className="comment">"{item.comment}"</p>
              <p className="date">{item.date}</p>
            </div>
          )
        )}
      </div>
    </div>
  </div>
);

export default App;
