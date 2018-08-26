import { createReducer } from 'redux-act';
import {
    connectionErrorAction,
    connectionSuccessAction,
    serverStatusErrorAction,
    serverStatusSuccessAction,
} from '@app/store/actions';

export default createReducer({
    [connectionErrorAction]: state => ({ ...state, connected: false, status: false }),
    [connectionSuccessAction]: state => ({ ...state, connected: true }),
    [serverStatusErrorAction]: state => ({ ...state, connected: false, status: false }),
    [serverStatusSuccessAction]: state => ({ ...state, status: true }),
}, {
    connected: false,
    status: false,
});
