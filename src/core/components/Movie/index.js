import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import style from './style.styl';

export default class Movie extends Component {
    static propTypes = {
        movie: PropTypes.object,
    };

    render() {
        const {
            movie: {
                genres,
                id,
                poster_path,
                title,
            },
        } = this.props;

        return <Link to={`/${id}`} className={style.container}>
            <div className={style.item} style={{ backgroundImage: `url(${poster_path})` }}>
                <div className={style.description}>
                    <div className={style.overlay}>
                        <span className={style.title}>{title}</span>
                        <div className={style.genres}>
                            {genres.map(genre => <span key={genre.id} className={style.genre}>{genre.name}</span>)}
                        </div>
                    </div>
                    <svg width="100%" height="100%" viewBox="0 90 200 210" className={style.svg}>
                        <defs>
                            <filter id={id}>
                                <feGaussianBlur in={id + name} stdDeviation="4" />
                            </filter>
                        </defs>
                        <image filter={`url(#${id})`}
                            xlinkHref={poster_path}
                            x="0"
                            y="0"
                            height="300px"
                            width="200px" />
                    </svg>
                </div>
            </div>
        </Link>;
    }
}
