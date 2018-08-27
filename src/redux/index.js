import { createStore, applyMiddleware } from "redux";
import promise from 'redux-promise';
import rootReducer from './reducers';

const store = applyMiddleware(promise)(createStore(rootReducer))

export default store;
