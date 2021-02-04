import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import * as themes from './styles/themes';
import GlobalStyles from './styles/global';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={themes.light}>
      <Router>
        <Routes />

        <GlobalStyles />
      </Router>
    </ThemeProvider>
  );
};

export default App;
