import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from '../components/BookShelf';

function MainPage({ books, onShelfChange }) {
  return (
    <div>
      <BookShelf title="Currently Reading" books={books.filter(b => b.shelf === 'currentlyReading')} onShelfChange={onShelfChange} />
      <BookShelf title="Want to Read" books={books.filter(b => b.shelf === 'wantToRead')} onShelfChange={onShelfChange} />
      <BookShelf title="Read" books={books.filter(b => b.shelf === 'read')} onShelfChange={onShelfChange} />
      <Link to="/search">Search for books</Link>
    </div>
  );
}

export default MainPage;