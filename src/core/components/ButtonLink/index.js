import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import style from './style.styl';

export default class ButtonLink extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    };

    render() {
        const { title, url } = this.props;

        return <Link to={url} className={style.container}>
            {title}
        </Link>;
    }
}
