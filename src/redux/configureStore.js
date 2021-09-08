import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { valuesReducer } from './values';

const reducer = combineReducers({
  values: valuesReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
