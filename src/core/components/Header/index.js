import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';

import style from './style.styl';

export default class Header extends Component {
    static propTypes = {
        isSearching: PropTypes.bool.isRequired,
        onSearch: PropTypes.func.isRequired,
        value: PropTypes.string,
    };

    static defaultProps = {
        isSearching: false,
        value: '',
    };

    state = {
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

        onSearch(searchString);
    };

    componentDidMount() {
        const { value } = this.props;

        this.setState({ searchString: value });
    }

    render() {
        const { searchString } = this.state;
        const { isSearching } = this.props;

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
                        {isSearching ? (
                            <svg width={20} height={20} viewBox="0 0 38 38" stroke="#fff" className={style.svg}>
                                <g fill="none" fillRule="evenodd">
                                    <g transform="translate(1 1)" strokeWidth="2">
                                        <circle strokeOpacity=".4" cx="18" cy="18" r="18"/>
                                        <path d="M36 18c0-9.94-8.06-18-18-18">
                                            <animateTransform
                                                attributeName="transform"
                                                type="rotate"
                                                from="0 18 18"
                                                to="360 18 18"
                                                dur={`${1}s`}
                                                repeatCount="indefinite"/>
                                        </path>
                                    </g>
                                </g>
                            </svg>) : 'Search'}
                    </button>
                </form>
            </Container>
        </div>;
    }
}
