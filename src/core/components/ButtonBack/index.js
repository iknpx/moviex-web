import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { RouterProps } from '../../props';
import style from './style.styl';

@withRouter
export default class ButtonBack extends Component {
    static propTypes = {
        ...RouterProps,
        className: PropTypes.string,
    };

    static defaultProps = {
        className: '',
    };

    handleClick = () => {
        const {
            history: {
                goBack,
            },
        } = this.props;

        goBack();
    }

    render() {
        const { className } = this.props;

        return <div className={`${style.container} ${className}`} onClick={this.handleClick}>
            <svg height="32px"
                version="1.1"
                viewBox="0 0 32 32"
                width="32px">
                <path clipRule="evenodd"
                    d={`M31.106,15H3.278l8.325-8.293  c0.391-0.391,0.391-1.024,0-1.414c-0.391-0.391-1.024-0.391-1.414,0l-9.9,9.899c-0.385,0.385-0.385,1.029,0,1.414l9.9,9.9  c0.391,0.391,1.024,0.391,1.414,0c0.391-0.391,0.391-1.024,0-1.414L3.278,17h27.828c0.552,0,1-0.448,1-1  C32.106,15.448,31.658,15,31.106,15z`}
                    fill="#fff"
                    fillRule="evenodd" />
            </svg>
        </div>;
    }
}
