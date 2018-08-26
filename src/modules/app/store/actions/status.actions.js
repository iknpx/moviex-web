import { createAction } from 'redux-act';

export const connectionSuccessAction = createAction('connection :: success');
export const connectionErrorAction = createAction('connection :: error');

export const serverStatusSuccessAction = createAction('server status :: success');
export const serverStatusErrorAction = createAction('server status :: error');
