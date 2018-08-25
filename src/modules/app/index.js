import './style.styl';

import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';

import { Layout } from '@core/components';

import { List, Movie } from './routes';
import { store, history } from './store';

@hot(module)
export class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path="/" component={List} />
                    <Route path="/:id" component={Movie} />
                    <Redirect to="/" />
                </Switch>
            </Layout>
        );
    }
}

export default function() {
    render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Router>
                    <App />
                </Router>
            </ConnectedRouter>
        </Provider>,
        document.getElementById('root')
    );
}

