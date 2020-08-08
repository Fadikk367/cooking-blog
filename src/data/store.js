import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { promiseMiddleware } from './middlewares';

import rootReducer from './reducers';

const configureStore = preloadedState => {
  const middlewares = [thunkMiddleware, promiseMiddleware];

  const middlewaresEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewaresEnhancer];

  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  return store;
}

export default configureStore;