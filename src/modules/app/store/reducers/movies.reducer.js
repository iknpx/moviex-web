import { createReducer } from 'redux-act';

import {
    addMoviesErrorAction,
    addMoviesStartAction,
    addMoviesSuccessAction,
} from '@app/store';

export default createReducer({
    [addMoviesErrorAction]: state => ({ ...state, isFetching: false, isError: true }),
    [addMoviesStartAction]: state => ({ ...state, isFetching: true, isError: false }),
    [addMoviesSuccessAction]: (state, data) => ({ ...state, isFetching: false, isError: false, data: [...state.data, ...data] }),
}, {
    isError: true,
    isFetching: false,
    searchString: '',
    data: [],
});
