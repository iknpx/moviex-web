import { createReducer } from 'redux-act';
import { concatMoviesAction, setMoviesAction } from '@app/store/actions';

export default createReducer({
    [concatMoviesAction]: (state, { results }) => [...state, ...results],
    [setMoviesAction]: (state, { results }) => results,
}, []);
