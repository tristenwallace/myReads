import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookList from '../components/BookList';
import SearchInput from '../components/SearchInput';
import * as BooksAPI from '../BooksAPI';

/**
 * SearchPage handles the book search functionality and displays the results.
 * @param {function} onShelfChange - Function to update the shelf of a book.
 * @param {Array} booksOnShelves - Array of books currently on shelves.
 */
function SearchPage({ onShelfChange, booksOnShelves }) {
  const [query, setQuery] = useState(''); // Tracks the user's search query input.
  const [newBooks, setNewBooks] = useState([]); // Stores the search results.
  const [searchErr, setSearchErr] = useState(false); // Indicates if there's an error in search.

  /**
   * Updates the search results based on the user's query.
   * @param {string} query - The search query.
   */
  const updateSearch = (query) => {
    if (query) {
      setQuery(query); // Update the query state
      BooksAPI.search(query.trim()).then(books => {
        if (books.error) {
          setNewBooks([]); // Clear results if there's an error
          setSearchErr(true); // Show error message
        } else {
          const updatedBooks = books.map(book => {
            const existingBook = booksOnShelves.find(b => b.id === book.id);
            return existingBook ? existingBook : { ...book, shelf: 'none' }; // Merge search results with shelf info
          });
          setNewBooks(updatedBooks); // Update the state with the new or existing books
          setSearchErr(false); // No error
        }
      });
    } else {
      setNewBooks([]); // Clear results if the query is empty
      setSearchErr(false); // No error
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
