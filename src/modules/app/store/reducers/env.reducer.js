import { createReducer } from 'redux-act';
import {
    fetchMovieDetailsStartAction,
    fetchMovieDetailsSuccessAction,
    fetchMovieRecommendationsStartAction,
    fetchMovieRecommendationsSuccessAction,
} from '@app/store/actions';

export default createReducer({
    [fetchMovieDetailsStartAction]: state => ({
        ...state,
        isMovieDetailsFetching: true,
    }),
    [fetchMovieDetailsSuccessAction]: state => ({
        ...state,
        isMovieDetailsFetching: false,
    }),
    [fetchMovieRecommendationsStartAction]: (state, page) => ({
        ...state,
        isMovieRecommendationsFetching: true,
        recommendationsPage: page,
    }),
    [fetchMovieRecommendationsSuccessAction]: (state, data) => ({
        ...state,
        isMovieRecommendationsFetching: false,
        recommendationsResultsCount: data.total_results,
        recommendationsPagesCount: data.total_pages,
    }),
}, {
    isMovieDetailsFetching: false,
    isMovieRecommendationsFetching: false,
    isMoviesFetching: false,
    isSearching: false,
    moviesPage: 0,
    moviesPagesCount: 0,
    moviesResultsCount: 0,
    recommendationsPage: 0,
    recommendationsPagesCount: 0,
    recommendationsResultsCount: 0,
    searchString: '',
});
