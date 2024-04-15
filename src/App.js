import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';

/**
 * Root component of the MyReads application that manages the main state and routing.
 */
function App() {
  // State to store the list of all books currently being tracked.
  const [books, setBooks] = useState([]);

  // Fetch books from the API on component mount.
  useEffect(() => {
    BooksAPI.getAll().then(setBooks);
  }, []);

  /**
   * Updates the shelf of a specified book and syncs the change with the backend.
   * @param {object} book - Book to update.
   * @param {string} shelf - New shelf to assign to the book.
   */
  const handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      // Optimistically update the book's shelf in the local state.
      setBooks(currentBooks => currentBooks.map(b => b.id === book.id ? { ...b, shelf } : b));
    });
  };

  return (
    <div className="app">
      {/* Application routing setup */}
      <Routes>
        <Route path="/" element={<MainPage books={books} onShelfChange={handleShelfChange} />} />
        <Route path="/search" element={<SearchPage onShelfChange={handleShelfChange} booksOnShelves={books} />} />
      </Routes>
    </div>
  );
}

export default App;
