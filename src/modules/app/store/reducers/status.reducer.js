import { createReducer } from 'redux-act';
import {
    connectionErrorAction,
    connectionSuccessAction,
    serverStatusErrorAction,
    serverStatusSuccessAction,
} from '@app/store/actions';

export default createReducer({
    [connectionErrorAction]: state => ({ ...state, connected: false }),
    [connectionSuccessAction]: state => ({ ...state, connected: true }),
    [serverStatusErrorAction]: state => ({ ...state, status: false }),
    [serverStatusSuccessAction]: state => ({ ...state, status: true }),
}, {
    connected: false,
    status: false,
});
