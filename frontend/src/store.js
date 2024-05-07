import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const presistConfig = {
  key: 'root',
  storage,
};

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(presistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
