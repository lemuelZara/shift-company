import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import * as themes from './styles/themes';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={themes.light}>
      <Router>
        <Header />

        <GlobalStyles />
      </Router>
    </ThemeProvider>
  );
};

export default App;
