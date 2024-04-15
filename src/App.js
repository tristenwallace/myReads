import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then(data => {
      setBooks(data);
    });
  }, []);

  const handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      setBooks(currentBooks => {
        return currentBooks.map(b => {
          if (b.id === book.id) {
            return { ...b, shelf };  // Create a new object with the updated shelf
          }
          return b;
        });
      });
    });
  };
      

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage books={books} onShelfChange={handleShelfChange} />} />
        <Route path="/search" element={<SearchPage onShelfChange={handleShelfChange} booksOnShelves={books} />} />
      </Routes>
    </div>
  );
}

export default App;