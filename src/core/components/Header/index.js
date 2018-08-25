import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';

import style from './style.styl';

export default class Header extends Component {
    static propTypes = {
        onSearch: PropTypes.func.isRequired,
        value: PropTypes.string,
    };

    static defaultProps = {
        value: '',
    };

    state = {
        isSearching: false,
        searchString: '',
    };

    handleInputChange = event => {
        const { value } = event.target;

        this.setState({ searchString: value });
    };

    handleSearch = event => {
        event.preventDefault();
        const { onSearch } = this.props;
        const { searchString } = this.state;

        this.setState({ isSearching: true });
        onSearch(searchString, () => this.setState({ isSearching: false, searchString: '' }));
    };

    componentDidMount() {
        const { value } = this.props;

        this.setState({ searchString: value });
    }

    render() {
        const { isSearching, searchString } = this.state;

        return <div className={style.container}>
            <Container className={style.content}>
                <span className={style.name}>MovieX</span>
                <form className={style.search} onSubmit={this.handleSearch}>
                    <input type="text"
                        placeholder="Type here..."
                        className={style.input}
                        value={searchString}
                        onChange={this.handleInputChange}
                        disabled={isSearching} />
                    <button className={style.button} disabled={isSearching}>
                        {isSearching ? '...' : 'Search'}
                    </button>
                </form>
            </Container>
        </div>;
    }
}
