import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

import userReducer from './userReducer';

export default createStore(
  combineReducers({
    user: userReducer
  }),
  applyMiddleware(
    logger
  ));

