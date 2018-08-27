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
                    <span className={style.title}>{title}</span>
                    <div className={style.genres}>
                        {genres.map(genre => (
                            <span key={genre.id} className={style.genre}>
                                {genre.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>;
    }
}
