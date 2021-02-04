import React from 'react';

import Header from '../../components/Header';
import HeroImageSlider from '../../components/HeroImageSlider';
import { sliderData } from '../../data/sliderData';

import Reasons from './Reasons';
import Services from './Services';

const MainContent: React.FC = () => {
  return (
    <>
      <Header />
      <HeroImageSlider slides={sliderData} />

      <main>
        <Services />
        <Reasons />
      </main>
    </>
  );
};

export default MainContent;
