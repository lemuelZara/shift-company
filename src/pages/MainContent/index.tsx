import React from 'react';

import Header from '../../components/Header';
import HeroImageSlider from '../../components/HeroImageSlider';
import { sliderData } from '../../data/sliderData';

import Services from './Services';
import Reasons from './Reasons';
import Numbers from './Numbers';
import Blog from './Blog';
import Contact from './Contact';

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
    </>
  );
};

export default MainContent;
