import { createReducer } from 'redux-act';
import {
    connectionErrorAction,
    connectionStartAction,
    connectionSuccessAction,
    serverStatusErrorAction,
    serverStatusStartAction,
    serverStatusSuccessAction,
} from '@app/store/actions';

export default createReducer({
    [connectionErrorAction]: state => ({ ...state, connected: false, isConnectionProceed: false }),
    [connectionStartAction]: state => ({ ...state, connected: false, isConnectionProceed: true }),
    [connectionSuccessAction]: state => ({ ...state, connected: true, isConnectionProceed: false }),
    [serverStatusErrorAction]: state => ({ ...state, status: false, isFetchingStatus: false }),
    [serverStatusStartAction]: state => ({ ...state, status: false, isFetchingStatus: true }),
    [serverStatusSuccessAction]: state => ({ ...state, status: true, isFetchingStatus: false }),
}, {
    connected: false,
    isConnectionProceed: false,
    isFetchingStatus: false,
    status: false,
});
