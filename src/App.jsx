import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Error from './pages/Error';

import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Portfolio />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
