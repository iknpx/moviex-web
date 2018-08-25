import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container, Header, TopMovie } from '@core/components';
import { DisptachProps } from '@core/props';

import style from './style.styl';

@connect(({ movies }) => ({ movies }))
export default class MoviesList extends Component {
    static propTypes = {
        ...DisptachProps,
        movies: PropTypes.object,
    };

    handleSearch = (searchString, done) => {
        console.log(searchString);

        setTimeout(() => done(), 800);
    }

    componentDidMount() {
        const { movies: { isError, isFetching, searchString, data } } = this.props;
    }

    render() {
        const { movies: { isError, isFetching, searchString, data } } = this.props;

        return <div className={style.container}>
            <Header onSearch={this.handleSearch} value={searchString} />
            <TopMovie />
            <Container>
                ...
            </Container>
        </div>;
    }
}
