import io from 'socket.io-client';
import env from '@core/environment.json';

const socket = io(env.WS.HOST);

import {
    concatMovieRecommendationsAction,
    concatMoviesAction,
    connectionErrorAction,
    connectionSuccessAction,
    fetchMovieDetailsStartAction,
    fetchMovieDetailsSuccessAction,
    fetchMovieRecommendationsStartAction,
    fetchMovieRecommendationsSuccessAction,
    fetchMoviesStartAction,
    fetchMoviesSuccessAction,
    serverStatusErrorAction,
    serverStatusSuccessAction,
    setMovieRecommendationsAction,
    setMoviesAction,
    setSearchStringAction,
    searchMoviesStartAction,
    searchMoviesSuccessAction,
} from '@app/store/actions';

export const connect = ({ dispatch }) => {
    socket.on('connect', handleConnect(dispatch));
    socket.on('disconnect', handleDissconnect(dispatch));

    socket.on('POST: MOVIE DETAILS', handleMovieDetails(dispatch));
    socket.on('POST: MOVIES', handleMovies(dispatch));
    socket.on('POST: RECOMMENDED', handleRecommended(dispatch));
    socket.on('POST: SERVER ERROR', handleServerError(dispatch));
    socket.on('POST: SERVER STATUS', handleServerStatus(dispatch));
};

/** Emiters */
export const emitPopularMovies = (page = 1) => dispatch => {
    dispatch(
        fetchMoviesStartAction(page),
    );

    socket.emit('GET: POPULAR MOVIES', { page });
};

export const emitSearch = (query, page = 1) => dispatch => {
    dispatch(
        setSearchStringAction(query),
    );

    dispatch(
        searchMoviesStartAction(),
    );

    dispatch(
        fetchMoviesStartAction(page),
    );

    socket.emit('GET: SEARCH MOVIES', { query, page });
};

export const emitMovieDetails = id => dispatch => {
    dispatch(
        fetchMovieDetailsStartAction(),
    );

    dispatch(
        fetchMovieRecommendationsStartAction(1),
    );

    socket.emit('GET: MOVIE DETAILS', { id });
    socket.emit('GET: RECOMMENDED MOVIES', { id, page: 1 });
};

export const emitMovieRecommendations = (id, page) => dispatch => {

    dispatch(
        fetchMovieRecommendationsStartAction(page),
    );

    socket.emit('GET: RECOMMENDED MOVIES', { id, page });
};

/** Handlers */
export const handleConnect = dispatch => () => {
    socket.emit('GET: SERVER STATUS');

    dispatch(
        connectionSuccessAction(),
    );
};

export const handleDissconnect = dispatch => () => {
    dispatch(
        connectionErrorAction(),
    );
};

export const handleServerStatus = dispatch => () => {
    dispatch(
        serverStatusSuccessAction(),
    );
};

export const handleMovieDetails = dispatch => data => {
    dispatch(
        fetchMovieDetailsSuccessAction(data),
    );
};

export const handleMovies = dispatch => data => {
    dispatch(
        fetchMoviesSuccessAction(data),
    );

    dispatch(
        searchMoviesSuccessAction(),
    );

    dispatch(
        data.page === 1
            ? setMoviesAction(data)
            : concatMoviesAction(data),
    );
};

export const handleRecommended = dispatch => data => {
    dispatch(
        fetchMovieRecommendationsSuccessAction(data),
    );

    dispatch(
        data.page === 1
            ? setMovieRecommendationsAction(data)
            : concatMovieRecommendationsAction(data),
    );
};

export const handleServerError = dispatch => error => {
    // TODO: dispatch error type as unique error action
    dispatch(
        serverStatusErrorAction(error),
    );
};
