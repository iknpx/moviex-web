import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container, Header, Loading, LoadMore, Movie, TopMovie } from '@core/components';
import { DisptachProps } from '@core/props';

import style from './style.styl';

@connect(({ movies }) => ({ movies }))
export default class MoviesList extends Component {
    static propTypes = {
        ...DisptachProps,
        movies: PropTypes.object,
    };

    handleSearch = (searchString, done) => {
        setTimeout(() => done(), 800);
    };

    handleLoadMore = () => {

    };

    componentDidMount() {
        const { movies: { isError, isFetching, searchString, data } } = this.props;
    }

    render() {
        const { movies: { isError, isFetching, searchString, data } } = this.props;

        const movie = {
            id: 299536,
            back: 'https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg',
            poster: 'https://image.tmdb.org/t/p/original/qJawKUQcIBha507UahUlX0keOT7.jpg',
            title: 'Avengers: Infinity War',
            tagline: 'An entire universe. Once and for all.',
            release_date: '2018-04-25',
            homepage: 'http://marvel.com/movies/movie/223/avengers_infinity_war_part_1',
            genres: [{
                id: 12,
                title: 'Adventure',
            },
            {
                id: 878,
                title: 'Science Fiction',
            },
            {
                id: 14,
                title: 'Fantasy',
            },
            {
                id: 28,
                title: 'Action',
            }],
        };

        return <div className={style.container}>
            { isFetching ? <Loading /> : null }
            <Header onSearch={this.handleSearch} value={searchString} />
            <TopMovie movie={movie} />
            <Container className={style.movies}>
                <div className={style.content}>
                    <Movie movie={movie} />
                    <Movie movie={movie} />
                    <Movie movie={movie} />
                    <Movie movie={movie} />
                    <Movie movie={movie} />
                    <Movie movie={movie} />
                    <Movie movie={movie} />
                    <Movie movie={movie} />
                </div>
                <LoadMore onLoad={this.handleLoadMore} count={0} />
            </Container>
        </div>;
    }
}
