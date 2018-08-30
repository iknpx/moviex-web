import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import moment from 'moment';

import Container from '../Container';
import ButtonBack from '../ButtonBack';
import style from './style.styl';

export default class MovieDetails extends Component {
    static propTypes = {
        movie: PropTypes.object.isRequired,
    };

    render() {
        const {
            movie: {
                backdrop_path,
                genres,
                homepage,
                overview,
                poster_path,
                release_date,
                tagline,
                title,
            },
        } = this.props;

        return <div className={style.container} style={{ backgroundImage: `url(${backdrop_path})` }}>
            <div className={style.overlay}>
                <Container className={style.content}>
                    <ButtonBack className={style.back} />
                    <div className={style.movie}>
                        <img src={poster_path} alt={title} className={style.poster} />
                        <div className={style.description}>
                            <span className={style.title}>{title}</span>
                            <span className={style.tagline}>{tagline}</span>
                            <span className={style.releasedate}>
                                {moment(release_date).format('DD MMMM, YY')}
                            </span>
                            <p className={style.overview}>{overview}</p>
                            <div className={style.genres}>
                                {genres.map(genre => <span key={genre.id} className={style.genre}>
                                    {genre.name}
                                </span>)}
                            </div>
                            <a href={homepage}
                                rel="noopener noreferrer"
                                target="__blank"
                                className={style.homepge}>Homepage</a>
                        </div>
                    </div>
                </Container>
            </div>
        </div>;
    }
}
