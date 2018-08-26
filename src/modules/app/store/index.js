import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import * as reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createHistory();
export const store = createStore(combineReducers({
    ...reducers,
    router: routerReducer,
}), composeEnhancers(applyMiddleware(thunk, routerMiddleware(history))));
