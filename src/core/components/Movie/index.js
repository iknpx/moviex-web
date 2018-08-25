import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import style from './style.styl';

export default class Movie extends Component {
    static propTypes = {
        movie: PropTypes.object,
    };

    render() {
        const { movie: { id, poster, tagline, title, genres } } = this.props;

        return <Link to={`/${id}`} className={style.container}>
            <div className={style.item} style={{ backgroundImage: `url(${poster})` }}>
                <div className={style.description}>
                    <span className={style.title}>{title}</span>
                    <span className={style.tagline}>{tagline}</span>
                    <div className={style.genres}>
                        {genres.map(genre => (
                            <span key={genre.id} className={style.genre}>
                                {genre.title}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>;
    }
}
