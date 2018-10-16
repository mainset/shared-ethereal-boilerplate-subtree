import { combineReducers } from 'redux';

import { exampleReducer } from 'store';

const createGlobalReducer = () => (
  combineReducers({
    example: exampleReducer,
    // NOTE: put other app reducers here
  })
);

export default createGlobalReducer;
