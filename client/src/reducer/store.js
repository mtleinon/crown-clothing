import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import userReducer from './userReducer';
import directoryReducer from './directoryReducer';
import cartReducer from './cartReducer';
import shopReducer from './shopReducer';

import rootSaga from './rootSaga';

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
  directory: directoryReducer
});

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
// console.debug('process =', process, process.env, process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const middleware = applyMiddleware(...middlewares);

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, middleware);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);