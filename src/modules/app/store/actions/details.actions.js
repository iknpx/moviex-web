import { createAction } from 'redux-act';

export const onFetchMoreMovieRecommendationsStartAction = createAction('fetch more movie recommendations :: start');
export const onFetchMoreMovieRecommendationsSuccessAction = createAction('fetch more movie recommendations :: success');
export const onFetchMovieDetailsStartAction = createAction('fetch movie details :: start');
export const onFetchMovieDetailsSuccessAction = createAction('fetch movie details :: success');
export const onFetchMovieRecommendationsStartAction = createAction('fetch movie recommendations :: start');
export const onFetchMovieRecommendationsSuccessAction = createAction('fetch movie recommendations :: success');
export const onFetchMovieTorrentsStartAction = createAction('fetch movie torrents :: start');
export const onFetchMovieTorrentsSuccessAction = createAction('fetch movie torrents :: success');
export const resetMovieAction = createAction('reset movie state');
