import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [showSearchPage, setShowSearchPage] = useState(false); // This might be deprecated

  useEffect(() => {
    BooksAPI.getAll().then(data => {
      setBooks(data);
    });
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage books={books} />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

function MainPage({ books }) {
  return (
    <div>
      {/* Placeholder for main page content, will be replaced with actual components */}
      <h1>MyReads</h1>
      {/* Add navigation link to Search Page */}
      <Link to="/search">Search for books</Link>
    </div>
  );
}

function SearchPage() {
  return (
    <div>
      {/* Placeholder for search page content */}
      <h1>Search Books</h1>
      {/* Add navigation link to Home Page */}
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default App;