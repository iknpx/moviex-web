import { createAction } from 'redux-act';

export const concatMoviesAction = createAction('movies :: concat');
export const fetchMoviesStartAction = createAction('fetch movies :: start');
export const fetchMoviesSuccessAction = createAction('fetch movies :: success');
export const setMoviesAction = createAction('movies :: set');
