import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainContent from '../pages/MainContent';

const Routes: React.FC = () => {
  return (
    <Router>
      <Route path="/" component={MainContent} />
    </Router>
  );
};

export default Routes;
