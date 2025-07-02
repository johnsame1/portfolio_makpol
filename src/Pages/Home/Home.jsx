import React from 'react';
import Banner from '../../Components/Banner/Banner';
import About from '../../Components/About/About';
import SectionFour from '../../Components/SectionFour/SectionFour';
import SliderCart from '../../Components/SliderCart/SliderCart';
import Services from '../../Components/Services/Services';

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <SectionFour />
      <SliderCart/>
    </>
  );
};

export default Home;
