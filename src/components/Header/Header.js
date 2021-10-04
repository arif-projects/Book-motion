import React from 'react';
import './Header.css'
import logo from '../../images/logo1.png'
import banner from '../../images/banner.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="headerContainer">
            <div className="logo">
                <img className="img" src={logo} alt="" />
            </div>
            <div className="navber">
                <div>
                    <nav>
                        <Link to="/home">Home</Link>
                        <Link to="/service">Service</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                </div>
            </div>

            <div className="row d-flex banner align-items-center justify-content-center">
                <div className="col-md-7">
                    <div className="text">
                        <h2 className="h2">Welcome to</h2>
                        <h1 className="h1"> <span className="title">Book Motion</span> Online Library!!</h1>
                        <h3 className="sub-title">Online Learning Anytime, Anywhere!</h3>
                        <h5 className="description">There are many variations of passages of Lorem Ipsum available, but the majority have <br /> suffered alteration in some form, by injected humor, or randomized words.</h5>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="banner-img">
                        <img className="w-75 banner" src={banner} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;