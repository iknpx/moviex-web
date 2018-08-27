import React, { Component } from 'react';

import style from './style.styl';

export default class NoMoviesFound extends Component {
    render() {
        return <div className={style.container}>
            <span className={style.title}>No movies found</span>
        </div>;
    }
}
