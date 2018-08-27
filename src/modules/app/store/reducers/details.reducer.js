import { createReducer } from 'redux-act';
import {
    onFetchMoreMovieRecommendationsStartAction,
    onFetchMoreMovieRecommendationsSuccessAction,
    onFetchMovieDetailsStartAction,
    onFetchMovieDetailsSuccessAction,
    onFetchMovieRecommendationsStartAction,
    onFetchMovieRecommendationsSuccessAction,
    resetMovieAction,
} from '@app/store/actions';

const initialState = {
    adult: false,
    backdrop_path: 'https://placehold.jp/640x480.png',
    genres: [],
    homepage: 'http://',
    id: 0,
    isLoadingDetails: false,
    isRecommendationsLoaded: false,
    isRecommendationsLoading: false,
    isRecommendationsMoreLoading: false,
    overview: '',
    page: 0,
    popularity: 0,
    poster_path: 'https://placehold.jp/480x640.png',
    recommendations: [],
    release_date: '2000-01-01',
    tagline: '',
    title: '',
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
