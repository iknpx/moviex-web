import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    Container,
    Loading,
    LoadingMore,
    Movie,
    MovieDetails,
    NoMoviesFound,
    Torrents,
} from '@core/components';

import { DisptachProps, RouterProps } from '@core/props';
import { emmiters } from '@app/services';
import { resetMovieAction } from '@app/store/actions';

import style from './style.styl';

@withRouter
@connect(({ details }) => ({ details }))
export default class MovieRoute extends Component {
    static propTypes = {
        ...DisptachProps,
        ...RouterProps,
        details: PropTypes.object,
    };

    state = {
        isTorrentsShow: false,
    };

    handleLoadMore = page => {
        const {
            dispatch,
            details: {
                id,
            },
        } = this.props;

        dispatch(
            emmiters.emitMovieRecommendations(id, page),
        );
    };

    handleClose = () => {
        this.setState({ isTorrentsShow: false });
    };

    handleTorrentsShown = () => {
        this.setState({ isTorrentsShow: true });
    };

    componentDidMount() {
        const {
            dispatch,
            match: {
                params: {
                    id,
                },
            },
        } = this.props;

        dispatch(
            emmiters.emitMovieDetails(id),
        );
    }

    componentWillUnmount() {
        const { dispatch } = this.props;

        dispatch(
            resetMovieAction()
        );
    }

    componentDidUpdate(props) {
        const { dispatch } = this.props;

        if (this.props.match.params.id !== props.match.params.id) {
            dispatch(
                resetMovieAction()
            );

            dispatch(
                emmiters.emitMovieDetails(this.props.match.params.id),
            );
        }
    }

    render() {
        const {
            details,
            details: {
                isLoadingDetails,
                isRecommendationsLoaded,
                isRecommendationsLoading,
                isRecommendationsMoreLoading,
                recommendations,
                total,
            },
        } = this.props;

        const { isTorrentsShow } = this.state;

        return <div className={style.container}>
            {isTorrentsShow && <Torrents torrents={details.torrents} onClose={this.handleClose} />}
            {isLoadingDetails ? <Loading /> : <MovieDetails movie={details} onTorrentsShown={this.handleTorrentsShown} />}
            {!isLoadingDetails && <Container className={style.movies}>
                {!!recommendations.length && <span className={style.title}>Recommended Movies</span>}
                {!!recommendations.length && !isRecommendationsLoading ? (
                    <React.Fragment>
                        <InfiniteScroll pageStart={1}
                            hasMore={!isRecommendationsMoreLoading && total - recommendations.length > 0}
                            loadMore={this.handleLoadMore}
                            threshold={800}>
                            <div className={style.content}>
                                {recommendations.map(movie => <Movie key={movie.id} movie={movie} />)}
                            </div>
                        </InfiniteScroll>
                    </React.Fragment>
                ) : !!isRecommendationsLoaded && (<NoMoviesFound />)}
                {isRecommendationsMoreLoading && <LoadingMore />}
            </Container>}
        </div>;
    }
}
