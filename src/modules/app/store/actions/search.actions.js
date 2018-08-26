import { createAction } from 'redux-act';

export const setSearchStringAction = createAction('search string :: set');

export const searchMoviesStartAction = createAction('search movies :: start');
export const searchMoviesSuccessAction = createAction('search string :: success');
