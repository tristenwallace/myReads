import React from 'react';
import BookShelf from '../components/BookShelf';
import Navbar from '../components/Navbar';

function MainPage({ books, onShelfChange }) {
  return (
    <div>
        <Navbar />
        <BookShelf title="Currently Reading" books={books.filter(b => b.shelf === 'currentlyReading')} onShelfChange={onShelfChange} />
        <BookShelf title="Want to Read" books={books.filter(b => b.shelf === 'wantToRead')} onShelfChange={onShelfChange} />
        <BookShelf title="Read" books={books.filter(b => b.shelf === 'read')} onShelfChange={onShelfChange} />
    </div>
  );
}

export default MainPage;