import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './style.styl';

export default class LoadMore extends Component {
    static propTypes = {
        count: PropTypes.number,
        onLoad: PropTypes.func.isRequired,
    };

    handleClick = () => {
        const { count, onLoad } = this.props;

        if (count) {
            onLoad();
        }
    }

    render() {
        const { count } = this.props;

        return <div className={`${style.container} ${ !count ? style.loading : ''}`}
            onClick={this.handleClick}>
            <span className={style.title}>Show more</span>
            <span className={style.count}>
                {count ? count : (
                    <svg width={20} height={20} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" className={style.svg}>
                        <g fill="none" fillRule="evenodd">
                            <g transform="translate(1 1)" strokeWidth="2">
                                <circle strokeOpacity=".4" cx="18" cy="18" r="18"/>
                                <path d="M36 18c0-9.94-8.06-18-18-18">
                                    <animateTransform
                                        attributeName="transform"
                                        type="rotate"
                                        from="0 18 18"
                                        to="360 18 18"
                                        dur={`${1}s`}
                                        repeatCount="indefinite"/>
                                </path>
                            </g>
                        </g>
                    </svg>
                )}
            </span>
        </div>;
    }
}
