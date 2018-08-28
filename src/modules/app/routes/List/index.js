import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    Container,
    Header,
    Loading,
    LoadingMore,
    Movie,
    NoMoviesFound,
    TopMovie,
} from '@core/components';
import { DisptachProps } from '@core/props';
import { emmiters } from '@app/services';

import style from './style.styl';

@connect(({ movies }) => ({ movies }))
export default class ListRoute extends Component {
    static propTypes = {
        ...DisptachProps,
        movies: PropTypes.object,
    };

    handleSearch = query => {
        const { dispatch } = this.props;

        if (query.length) {
            dispatch(
                emmiters.emitSearch(query),
            );
        } else {
            dispatch(
                emmiters.emitPopularMovies(),
            );
        }
    };

    handleLoadMore = page => {
        const {
            dispatch,
            movies: {
                query,
            },
        } = this.props;

        dispatch(
            query.length
                ? emmiters.emitSearch(query, page)
                : emmiters.emitPopularMovies(page),
        );
    }

    componentDidMount() {
        const {
            dispatch,
            movies: {
                isLoaded,
            },
        } = this.props;

        if (!isLoaded) {
            dispatch(
                emmiters.emitPopularMovies(),
            );
        }
    }

    render() {
        const {
            movies: {
                isLoading,
                isLoadingMore,
                isSearching,
                isSearchingMore,
                list,
                query,
                total,
            },
        } = this.props;

        return <div className={style.container}>
            <Header onSearch={this.handleSearch} value={query} isSearching={isSearching} />
            <div className={style.body}>
                {isLoading && <Loading />}
                {!!list.length && !isLoading ? (
                    <React.Fragment>
                        <TopMovie movie={list[0]} />
                        <InfiniteScroll pageStart={1}
                            hasMore={!isLoadingMore && !isSearchingMore && total - list.length > 0}
                            loadMore={this.handleLoadMore}
                            threshold={800}>
                            <Container className={style.movies}>
                                <div className={style.content}>
                                    {list.map(movie => <Movie key={movie.id} movie={movie} />)}
                                </div>
                            </Container>
                        </InfiniteScroll>
                    </React.Fragment>
                ) : !isLoading && !isSearching && (<NoMoviesFound />)}
                {(isLoadingMore || isSearchingMore) && <LoadingMore />}
            </div>
        </div>;
    }
}
