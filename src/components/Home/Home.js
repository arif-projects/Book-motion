import React from 'react';
import Book from '../Book/Book';
import Books from '../Books/Books';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Books></Books>
            <Footer></Footer>
        </div>
    );
};

export default Home;