import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from '@core/components';
import { DisptachProps } from '@core/props';

import style from './style.styl';

@connect(({ movies }) => ({ movies }))
export default class MoviesList extends Component {
    static propTypes = {
        ...DisptachProps,
        movies: PropTypes.object,
    };

    render() {
        return <div className={style.container}>
            <Container>
                ...
            </Container>
        </div>;
    }
}
