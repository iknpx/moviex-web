import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import ButtonLink from '../ButtonLink';
import style from './style.styl';

export default class TopMovie extends Component {
    static propTypes = {
        movie: PropTypes.object,
    };

    render() {
        const { movie: { back, tagline, title, release_date, homepage } } = this.props;

        return <div className={style.container} style={{ backgroundImage: `url(${back})` }}>
            <div className={style.overlay}>
                <div className={style.header}>
                    <span className={style.title}>{title}</span>
                    <span className={style.tagline}>
                        {tagline}
                    </span>
                </div>
                <ButtonLink url={homepage} title="Home Page" />
                <div className={style.footer}>
                    <span className={style.date}>
                        {moment(release_date).format('DD of MMMM, YYYY')}
                    </span>
                </div>
            </div>
        </div>;
    }
}
