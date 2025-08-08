import React from 'react';
import Banner from '../../Components/Banner/Banner';
import About from '../../Components/About/About';
import Services from '../../Components/Services/Services';
import SectionFour from '../../Components/SectionFour/SectionFour';
import SliderCart from '../../Components/SliderCart/SliderCart';

const Home = () => {
  return (
    <>
      <section id="banner">
        <Banner />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="why_choose_us">
        <SectionFour />
      </section>

      <section id="portfolio">
        <SliderCart />
      </section>
    </>
  );
};

export default Home;
