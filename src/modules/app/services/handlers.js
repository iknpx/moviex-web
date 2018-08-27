import io from 'socket.io-client';
import env from '@core/environment.json';

import {
    connectionErrorAction,
    connectionStartAction,
    connectionSuccessAction,
    onFetchMoreMovieRecommendationsSuccessAction,
    onFetchMoreMoviesSuccessAction,
    onFetchMovieDetailsSuccessAction,
    onFetchMovieRecommendationsSuccessAction,
    onFetchMoviesSuccessAction,
    onSearchMoreMoviesSuccessAction,
    onSearchMoviesSuccessAction,
    serverStatusErrorAction,
    serverStatusStartAction,
    serverStatusSuccessAction,
} from '@app/store/actions';

export const socket = io(env.WS.HOST);

export const connect = ({ dispatch }) => {
    dispatch(
        connectionStartAction(),
    );

    socket.on('connect', handleConnect(dispatch));
    socket.on('disconnect', handleDissconnect(dispatch));

    socket.on('POST: MOVIE DETAILS', handleMovieDetails(dispatch));
    socket.on('POST: MOVIES', handleMovies(dispatch));
    socket.on('POST: RECOMMENDED', handleRecommendations(dispatch));
    socket.on('POST: SERVER ERROR', handleServerError(dispatch));
    socket.on('POST: SERVER STATUS', handleServerStatus(dispatch));
};

// @on: connect
const handleConnect = dispatch => () => {
    socket.emit('GET: SERVER STATUS');

    dispatch(
        connectionSuccessAction(),
    );

    dispatch(
        serverStatusStartAction(),
    );
};

// @on: disconnect
const handleDissconnect = dispatch => () => {
    dispatch(
        connectionErrorAction(),
    );
};

// @on: server status
const handleServerStatus = dispatch => () => {
    dispatch(
        serverStatusSuccessAction(),
    );
};

// @on: server error
const handleServerError = dispatch => error => {
    socket.emit('GET: SERVER STATUS');

    dispatch(
        serverStatusErrorAction(error),
    );

    dispatch(
        serverStatusStartAction(),
    );
};

// @on: movies list
const handleMovies = dispatch => data => {
    const action = data.search
        ? data.page === 1
            ? onSearchMoviesSuccessAction
            : onSearchMoreMoviesSuccessAction
        : data.page === 1
            ? onFetchMoviesSuccessAction
            : onFetchMoreMoviesSuccessAction;

    dispatch(
        action(data),
    );
};

// @on: movie details
const handleMovieDetails = dispatch => data => {
    dispatch(
        onFetchMovieDetailsSuccessAction(data),
    );
};

// @on: movie recommendations
const handleRecommendations = dispatch => data => {
    dispatch(
        data.page === 1
            ? onFetchMovieRecommendationsSuccessAction(data)
            : onFetchMoreMovieRecommendationsSuccessAction(data),
    );
};
