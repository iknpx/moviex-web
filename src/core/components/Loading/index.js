import React, { Component } from 'react';

import style from './style.styl';

export default class Loading extends Component {
    render() {
        return <div className={style.container}>
            <svg width={65} height={65} viewBox="0 0 38 38" stroke="#333" className={style.svg}>
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
        </div>;
    }
}
