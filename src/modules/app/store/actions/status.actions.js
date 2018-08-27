import { createAction } from 'redux-act';

export const connectionErrorAction = createAction('connection :: error');
export const connectionStartAction = createAction('connection :: start');
export const connectionSuccessAction = createAction('connection :: success');
export const serverStatusErrorAction = createAction('server status :: error');
export const serverStatusStartAction = createAction('server status :: start');
export const serverStatusSuccessAction = createAction('server status :: success');
