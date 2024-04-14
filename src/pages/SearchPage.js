import React from 'react';
import { Link } from 'react-router-dom';

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

export default SearchPage;