import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './style.styl';

export default class Download extends Component {
    static propTypes = {
        torrents: PropTypes.array.isRequired,
    };

    render() {
        const { torrents, ...props } = this.props;

        return <div className={`${style.button} ${torrents.length ? style.visible : ''}`} {...props}>
            <span className={style.title}>Download</span>
        </div>;
    }
}
