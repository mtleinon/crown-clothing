import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

import userReducer from './userReducer';
import cartReducer from './cartReducer';

export default createStore(
  combineReducers({
    user: userReducer,
    cart: cartReducer
  }),
  applyMiddleware(
    logger
  ));

