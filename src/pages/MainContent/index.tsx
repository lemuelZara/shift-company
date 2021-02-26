import React from 'react';

import { sliderData } from '../../data/sliderData';

import Header from '../../components/Header';
import HeroImageSlider from '../../components/HeroImageSlider';
import Services from './Services';
import Reasons from './Reasons';
import Numbers from './Numbers';
import Blog from './Blog';
import Contact from './Contact';
import Footer from '../../components/Footer';

const MainContent: React.FC = () => {
  return (
    <>
      <Header />
      <HeroImageSlider slides={sliderData} />

      <main>
        <Services />
        <Reasons />
        <Numbers />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default MainContent;
