import './style.styl';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { hot } from 'react-hot-loader';
import { Provider, connect } from 'react-redux';
import { render } from 'react-dom';

import { ConnectionError, Layout } from '@core/components';

import { handlers as  SocketHandlers } from './services';
import { List, Movie } from './routes';
import { store, history } from './store';

@withRouter
@hot(module)
@connect(({ status }) => ({ status }))
export class App extends Component {
    static propTypes = {
        status: PropTypes.object,
    };

    render() {
        const { status: { connected, isConnectionProceed } } = this.props;

        return (
            <Layout>
                {connected ? <Switch>
                    <Route exact path="/" component={List} />
                    <Route path="/:id" component={Movie} />
                    <Redirect to="/" />
                </Switch> : (!isConnectionProceed && <ConnectionError />)}
            </Layout>
        );
    }
}

export default function() {
    SocketHandlers.connect(store);

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

