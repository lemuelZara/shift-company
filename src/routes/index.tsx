import React from 'react';

import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import MainContent from '../pages/MainContent';
import Post from '../pages/MainContent/Blog/Post';

const Routes: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Route
      render={() => (
        <AnimatePresence initial exitBeforeEnter>
          <Switch location={location} key={pathname}>
            <Route path="/" exact render={() => <MainContent />} />
            <Route path="/blog/post/:id" exact render={() => <Post />} />
          </Switch>
        </AnimatePresence>
      )}
    />
  );
};

export default Routes;
