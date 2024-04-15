import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookList from '../components/BookList';
import SearchInput from '../components/SearchInput';
import * as BooksAPI from '../BooksAPI';

function SearchPage({ onShelfChange, booksOnShelves }) {
  const [query, setQuery] = useState('');
  const [newBooks, setNewBooks] = useState([]);
  const [searchErr, setSearchErr] = useState(false);

  const updateSearch = (query) => {
    if (query) {
      setQuery(query);
      BooksAPI.search(query.trim()).then(books => {
        if (books.error) {
          setNewBooks([]);
          setSearchErr(true);
        } else {
          const updatedBooks = books.map(book => {
            const existingBook = booksOnShelves.find(b => b.id === book.id);
            return existingBook ? existingBook : { ...book, shelf: 'none' };
          });
          setNewBooks(updatedBooks);
          setSearchErr(false);
        }
      });
    } else {
      setNewBooks([]);
      setSearchErr(false);
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        <SearchInput value={query} onChange={updateSearch} />
      </div>
      <div className="search-books-results">
        {searchErr && <h3>No results found. Try different keywords!</h3>}
        {!searchErr && newBooks.length > 0 && (
          <BookList books={newBooks} onShelfChange={onShelfChange} />
        )}
      </div>
    </div>
  );
}

export default SearchPage;