import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Books.css'

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('./FakeDB.JSON')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    // console.log(books);

    return (

        <div className="row books-container">
            <h1 className="text-center m-2 p-2">Read Your Favourite one!!</h1>

            {
                books.map(book => <Book
                    key={book.key}
                    book={book}
                ></Book>)
            }

        </div>
    );
};

export default Books;