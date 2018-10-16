import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import reduxStore from './redux-store';
import routes from './routes';

const MAIN = (
  <Provider store={reduxStore}>
    {routes}
  </Provider>
);

ReactDOM.render(MAIN, document.getElementById('react-ethereal-boilerplate'));
