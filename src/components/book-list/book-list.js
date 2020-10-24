import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withBookstoreService } from '../../hoc';
import { fetchBooks } from '../../actions';
import { compose } from '../../utils';

import './book-list.scss';

import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const BooksList = ({ books }) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return <li key={book.id}><BookListItem book={book} /></li>
                })
            }
        </ul>
    );
}

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error } = this.props;

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <BooksList books={books}/>
    }
}

const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
    return {
        fetchBooks: fetchBooks(dispatch, bookstoreService)
    }
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);