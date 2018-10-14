import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Example, Home } from './pages';

const routes = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/example" component={Example} />
    </Switch>
  </Router>
);

export default routes;
