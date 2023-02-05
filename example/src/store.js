import {
  compose,
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

import { simpleReduxFieldReducer } from 'simple-redux-field';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(combineReducers({
  ...simpleReduxFieldReducer,
}), composeEnhancers(applyMiddleware(thunk)));

export default store;
