import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import * as themes from './styles/themes';
import GlobalStyles from './styles/global';
import Header from './components/Header';
import HeroImageSlider from './components/HeroImageSlider';
import { sliderData } from './data/sliderData';
import MainContent from './pages/MainContent';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={themes.light}>
      <Router>
        <Header />
        <HeroImageSlider slides={sliderData} />

        <MainContent />

        <GlobalStyles />
      </Router>
    </ThemeProvider>
  );
};

export default App;
