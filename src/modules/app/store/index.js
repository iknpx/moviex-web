import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { routerMiddleware, routerReducer as router } from 'react-router-redux';
import * as reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createHistory();

export const composition = history
    |> routerMiddleware
    |> (_ => applyMiddleware(thunk, _))
    |> composeEnhancers;

export const store = createStore(combineReducers({ ...reducers, router }), composition);
