import React from 'react';
import Book from './Book';

function BookList({ books, onShelfChange }) {
  return (
    <ol className="books-grid">
      {books.map(book => (
        <li key={book.id}>
          <Book book={book} onShelfChange={onShelfChange} />
        </li>
      ))}
    </ol>
  );
}

export default BookList;