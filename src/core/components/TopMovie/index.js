import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import Container from '../Container';
import ButtonLink from '../ButtonLink';
import style from './style.styl';

export default class TopMovie extends Component {
    static propTypes = {
        movie: PropTypes.object,
    };

    render() {
        const { movie: { id, backdrop_path, overview, title, release_date } } = this.props;

        return <div className={style.container} style={{ backgroundImage: `url(${backdrop_path})` }}>
            <div className={style.overlay}>
                <Container className={style.header}>
                    <span className={style.title}>{title}</span>
                    <span className={style.overview}>{overview}</span>
                </Container>
                <ButtonLink url={`/${id}`} title="DETAILS" />
                <div className={style.footer}>
                    <span className={style.date}>
                        {moment(release_date).format('DD of MMMM, YY')}
                    </span>
                </div>
            </div>
        </div>;
    }
}
