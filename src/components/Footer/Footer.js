import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="row footer">
            <div className="col-md-4 join">
                <h3>Join us</h3>
                <h5>facebook</h5>
                <h5>Instagram</h5>
                <h5>Whats app</h5>
                <h5>Twteer</h5>
            </div>

            <div className="col-md-4 time">
                <h3>TIMING</h3>
                <h5>Mon - Thu: 9 am - 9 pm</h5>
                <h5>Fri: 9 am - 6 pm</h5>
                <h5>Sat: 9 am - 5 pm</h5>
                <h5>Sun: 1 pm - 6 pm</h5>
                <h5>Closings Branches</h5>

            </div>

            <div className="col-md-4 links">
                <h3>QUICK LINKS</h3>
                <h5>Library News</h5>
                <h5>Services</h5>
                <h5>Home</h5>
                <h5>About us</h5>
            </div>

            <h6 className="h6">&copy;2021-All rights reserved.</h6>
        </div>
    );
};

export default Footer;