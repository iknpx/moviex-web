import { createAction } from 'redux-act';

export const connectionErrorAction = createAction('connection :: error');
export const connectionSuccessAction = createAction('connection :: success');
export const serverStatusErrorAction = createAction('server status :: error');
export const serverStatusSuccessAction = createAction('server status :: success');
