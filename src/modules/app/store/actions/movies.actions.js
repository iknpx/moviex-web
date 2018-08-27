import { createAction } from 'redux-act';

export const onFetchMoreMoviesStartAction = createAction('fetch more movies :: start');
export const onFetchMoreMoviesSuccessAction = createAction('fetch more movies :: success');
export const onFetchMoviesStartAction = createAction('fetch movies :: start');
export const onFetchMoviesSuccessAction = createAction('fetch movies :: success');
export const onSearchMoreMoviesStartAction = createAction('search more movies :: start');
export const onSearchMoreMoviesSuccessAction = createAction('search more movies :: success');
export const onSearchMoviesStartAction = createAction('search movies :: start');
export const onSearchMoviesSuccessAction = createAction('search movies :: success');
export const setSearchQueryAction = createAction('set search query');
