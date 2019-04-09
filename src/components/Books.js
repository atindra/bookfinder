import React, { Component } from 'react';
import BookItem from './BookItem';
import { Pagination } from 'react-bootstrap';

export default class Books extends Component {
  render() {
    const { books } = this.props;
    return (
      books.length > 0 && (
        <>
          {books.map((book, index) => {
            return <BookItem key={index} index={index} book={book} />;
          })}
        </>
      )
    );
  }
}
