import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { WS } from '../../environment.json';
import style from './style.styl';

export default class Torrents extends Component {
    static propTypes = {
        torrents: PropTypes.array.isRequired,
        onClose: PropTypes.func.isRequired,
    };

    handleClose = () => {
        const { onClose } = this.props;

        onClose();
    };

    render() {
        const { torrents } = this.props;

        return <div className={style.container}>
            <div className={style.panel}>
                <div className={style.header}>
                    <svg className={style.close} onClick={this.handleClose}
                        height="48"
                        width="48">
                        <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" fill="#333333" />
                    </svg>
                </div>
                <div className={style.body}>
                    {torrents.sort((a, b) => a.size > b.size ? -1 : 1).map(torrent => <div className={style.row} key={torrent.id}>
                        <span className={style.size}>{(torrent.size / 1024 / 1024 / 1024).toFixed(2)} Gb</span>
                        <a className={style.link} href={`${WS.HOST}/${torrent.id}`}>{torrent.title}</a>
                    </div>)}
                </div>
            </div>
        </div>;
    }
}
