import { createReducer } from 'redux-act';
import {
    concatMovieRecommendationsAction,
    fetchMovieDetailsSuccessAction,
    resetMovieDetailsAction,
    setMovieRecommendationsAction,
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
};

export default createReducer({
    [resetMovieDetailsAction]: () => initialState,
    [concatMovieRecommendationsAction]: (state, data) => ({
        ...state,
        recommendations: [...state.recommendations, ...data.results],
    }),
    [fetchMovieDetailsSuccessAction]: (state, data) => ({
        ...state,
        ...data,
    }),
    [setMovieRecommendationsAction]: (state, data) => ({
        ...state,
        recommendations: data.results,
    }),
}, initialState);
