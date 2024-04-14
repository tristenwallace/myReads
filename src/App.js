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
      book.shelf = shelf;
      setBooks(books.map(b => b.id === book.id ? book : b));
    });
  };
      

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage books={books} onShelfChange={handleShelfChange} />} />
        <Route path="/search" element={<SearchPage onShelfChange={handleShelfChange} books={books} />} />
      </Routes>
    </div>
  );
}

export default App;