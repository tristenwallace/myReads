import React from 'react';

function SearchInput({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search by title or author"
      value={value}
      onChange={e => onChange(e.target.value)}
      className="search-books-input-wrapper"
    />
  );
}

export default SearchInput;