import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(promise)
)

export default store;
