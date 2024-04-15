import React, { useState, useEffect } from 'react';

function Book({ book, onShelfChange }) {
    const [shelf, setShelf] = useState(book.shelf);

    // Effect to update the shelf state if the book.shelf prop changes
    useEffect(() => {
        setShelf(book.shelf);
    }, [book.shelf]);

    const handleChange = (event) => {
        const newShelf = event.target.value;
        setShelf(newShelf); // Optimistically update the UI
        onShelfChange(book, newShelf); // Notify parent component to update global state
    };

    const authors = book.authors ? book.authors.join(', ') : 'Unknown authors';
    const imageUrl = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : 'fallback-image-url.jpg';

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${imageUrl}")` }}></div>
                <div className="book-shelf-changer">
                    <select onChange={handleChange} value={shelf}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{authors}</div>
        </div>
    );
}

export default Book;