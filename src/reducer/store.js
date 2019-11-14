import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import logger from 'redux-logger';

import userReducer from './userReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

const middleware = applyMiddleware(logger);

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store);