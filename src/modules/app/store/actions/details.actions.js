import { createAction } from 'redux-act';

export const concatMovieRecommendationsAction = createAction('movie recommendations :: concat');
export const fetchMovieDetailsStartAction = createAction('fetch movie details :: start');
export const fetchMovieDetailsSuccessAction = createAction('fetch movie details :: success');
export const fetchMovieRecommendationsStartAction = createAction('fetch movie recommendations :: start');
export const fetchMovieRecommendationsSuccessAction = createAction('fetch movie recommendations :: success');
export const resetMovieDetailsAction = createAction('movie details :: reset');
export const setMovieRecommendationsAction = createAction('movie recommendations :: set');
