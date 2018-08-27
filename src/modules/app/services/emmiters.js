import {
    onFetchMoreMovieRecommendationsStartAction,
    onFetchMoreMoviesStartAction,
    onFetchMovieDetailsStartAction,
    onFetchMovieRecommendationsStartAction,
    onFetchMoviesStartAction,
    onSearchMoreMoviesStartAction,
    onSearchMoviesStartAction,
    setSearchQueryAction,
} from '@app/store/actions';

import { socket } from './handlers';

// @emit: popular movies
export const emitPopularMovies = (page = 1) => dispatch => {
    dispatch(
        setSearchQueryAction(''),
    );

    dispatch(
        page === 1
            ? onFetchMoviesStartAction()
            : onFetchMoreMoviesStartAction(),
    );

    socket.emit('GET: POPULAR MOVIES', { page });
};

// @emit: search movies
export const emitSearch = (query, page = 1) => dispatch => {
    dispatch(
        page === 1
            ? onSearchMoviesStartAction()
            : onSearchMoreMoviesStartAction(),
    );

    dispatch(
        setSearchQueryAction(query),
    );

    socket.emit('GET: SEARCH MOVIES', { query, page });
};

// @emit: movie details
export const emitMovieDetails = id => dispatch => {
    dispatch(
        onFetchMovieDetailsStartAction(),
    );

    dispatch(
        onFetchMovieRecommendationsStartAction(),
    );

    socket.emit('GET: MOVIE DETAILS', { id });
    socket.emit('GET: RECOMMENDED MOVIES', { id, page: 1 });
};

// @emit: movie recommendations
export const emitMovieRecommendations = (id, page) => dispatch => {
    dispatch(
        onFetchMoreMovieRecommendationsStartAction(),
    );

    socket.emit('GET: RECOMMENDED MOVIES', { id, page });
};
