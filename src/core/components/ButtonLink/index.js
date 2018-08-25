import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './style.styl';

export default class ButtonLink extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    };

    render() {
        const { title, url } = this.props;

        return <a target="__blank" href={url} className={style.container}>
            {title}
        </a>;
    }
}
