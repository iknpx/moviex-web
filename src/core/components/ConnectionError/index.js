import React, { Component } from 'react';

import img from '@src/assets/disconnected.svg';
import style from './style.styl';

export default class ConnectionError extends Component {
    render() {
        return <div className={style.container}>
            <img src={img} alt="Disconnected" className={style.img} />
            <span>Connection with server lost</span>
            <span>Wait a bit for continue working</span>
            <span>We try to fix it</span>
            <span>Sorry...</span>
        </div>;
    }
}
