import { createReducer } from 'redux-act';

import {
    onFetchMoreMoviesStartAction,
    onFetchMoreMoviesSuccessAction,
    onFetchMoviesStartAction,
    onFetchMoviesSuccessAction,
    onSearchMoreMoviesStartAction,
    onSearchMoreMoviesSuccessAction,
    onSearchMoviesStartAction,
    onSearchMoviesSuccessAction,
    setSearchQueryAction,
} from '@app/store/actions';

export default createReducer({
    [onFetchMoviesStartAction]: state => ({
        ...state,
        isLoading: true,
    }),
    [onFetchMoviesSuccessAction]: (state, payload) => ({
        ...state,
        isLoaded: true,
        isLoading: false,
        list: payload.results,
        page: payload.page,
        total: payload.total_results,
    }),
    [onFetchMoreMoviesStartAction]: state => ({
        ...state,
        isLoadingMore: true,
    }),
    [onFetchMoreMoviesSuccessAction]: (state, payload) => ({
        ...state,
        isLoadingMore: false,
        list: [...state.list, ...payload.results],
        page: payload.page,
    }),
    [onSearchMoviesStartAction]: state => ({
        ...state,
        isSearching: true,
    }),
    [onSearchMoviesSuccessAction]: (state, payload) => ({
        ...state,
        isSearching: false,
        list: payload.results,
        page: payload.page,
        total: payload.total_results,
    }),
    [onSearchMoreMoviesStartAction]: state => ({
        ...state,
        isSearchingMore: true,
    }),
    [onSearchMoreMoviesSuccessAction]: (state, payload) => ({
        ...state,
        isSearchingMore: false,
        list: [...state.list, ...payload.results],
    }),
    [setSearchQueryAction]: (state, query) => ({ ...state, query }),
}, {
    isLoaded: false,
    isLoading: false,
    isLoadingMore: false,
    isSearching: false,
    isSearchingMore: false,
    list: [],
    page: 0,
    query: '',
    total: 0,
});
