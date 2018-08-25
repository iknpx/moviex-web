import { createAction } from 'redux-act';

export const addMoviesErrorAction = createAction('add movies :: error');
export const addMoviesStartAction = createAction('add movies :: start');
export const addMoviesSuccessAction = createAction('add movies :: success');
