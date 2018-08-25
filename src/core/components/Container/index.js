import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './style.styl';

export default class Container extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    static defaultProps = {
        className: '',
    };

    render() {
        const { className, children } = this.props;

        return <div className={`${style.container} ${className}`}>
            {children}
        </div>;
    }
}
