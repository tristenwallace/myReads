import React from 'react';
import BookList from './BookList';

function BookShelf({ title, books, onShelfChange }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BookList books={books} onShelfChange={onShelfChange} />
      </div>
    </div>
  );
}

export default BookShelf;