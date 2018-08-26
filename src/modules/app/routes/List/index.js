import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container, Header, Loading, LoadMore, Movie, TopMovie } from '@core/components';
import { DisptachProps } from '@core/props';

import style from './style.styl';

import * as MovieService from '../../service';

@connect(({ env, movies }) => ({ env, movies }))
export default class MoviesList extends Component {
    static propTypes = {
        ...DisptachProps,
        env: PropTypes.object,
        movies: PropTypes.array,
    };

    handleSearch = searchString => {
        const { dispatch } = this.props;

        dispatch(
            MovieService.emitSearch(searchString, 1),
        );
    };

    handleLoadMore = () => {
        const { dispatch, env: { moviesPage, searchString } } = this.props;

        dispatch(
            searchString
                ? MovieService.emitSearch(searchString, moviesPage + 1)
                : MovieService.emitPopularMovies(moviesPage + 1),
        );
    };

    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(
            MovieService.emitPopularMovies(),
        );
    }

    render() {
        const { movies, env: { searchString, isMoviesFetching, isSearching, moviesResultsCount } } = this.props;

        return <div className={style.container}>
            { isMoviesFetching && !movies.length ? <Loading /> : (
                <React.Fragment>
                    <Header onSearch={this.handleSearch} value={searchString} isSearching={isSearching} />
                    {movies.length && <TopMovie movie={movies[0]} />}
                    <Container className={style.movies}>
                        <div className={style.content}>
                            {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
                        </div>
                        {moviesResultsCount - movies.length > 0 && <LoadMore
                            onLoad={this.handleLoadMore}
                            count={isMoviesFetching ? 0 : moviesResultsCount - movies.length} />}
                    </Container>
                </React.Fragment>
            ) }
        </div>;
    }
}
