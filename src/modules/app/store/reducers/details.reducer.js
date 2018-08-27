import { createReducer } from 'redux-act';
import {
    resetMovieAction,
    onFetchMovieDetailsStartAction,
    onFetchMovieDetailsSuccessAction,
    onFetchMovieRecommendationsStartAction,
    onFetchMovieRecommendationsSuccessAction,
    onFetchMoreMovieRecommendationsStartAction,
    onFetchMoreMovieRecommendationsSuccessAction,
} from '@app/store/actions';

const initialState = {
    adult: false,
    backdrop_path: 'http://placehold.jp/640x480.png',
    genres: [],
    homepage: 'http://',
    id: 0,
    overview: '',
    popularity: 0,
    poster_path: 'http://placehold.jp/480x640.png',
    recommendations: [],
    release_date: '2000-01-01',
    tagline: '',
    title: '',
    isLoadingDetails: false,
    isRecommendationsLoaded: false,
    isRecommendationsLoading: false,
    isRecommendationsMoreLoading: false,
    page: 0,
    total: 0,
};

export default createReducer({
    [resetMovieAction]: () => initialState,
    [onFetchMovieDetailsStartAction]: state => ({
        ...state,
        isLoadingDetails: true,
    }),
    [onFetchMovieDetailsSuccessAction]: (state, payload) => ({
        ...state,
        ...payload,
        isLoadingDetails: false,
    }),
    [onFetchMovieRecommendationsStartAction]: state => ({
        ...state,
        isRecommendationsLoading: true,
    }),
    [onFetchMovieRecommendationsSuccessAction]: (state, payload) => ({
        ...state,
        recommendations: payload.results,
        page: payload.page,
        total: payload.total_results,
        isRecommendationsLoaded: true,
        isRecommendationsLoading: false,
    }),
    [onFetchMoreMovieRecommendationsStartAction]: state => ({
        ...state,
        isRecommendationsMoreLoading: true,
    }),
    [onFetchMoreMovieRecommendationsSuccessAction]: (state, payload) => ({
        ...state,
        recommendations: [...state.recommendations, ...payload.results],
        page: payload.page,
        total: payload.total_results,
        isRecommendationsMoreLoading: false,
    }),

}, initialState);
