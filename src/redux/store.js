import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import reducers from './reducers';

const middlewares = [logger()];

const enhancers = compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default createStore(
  reducers,
  undefined,
  enhancers
);
