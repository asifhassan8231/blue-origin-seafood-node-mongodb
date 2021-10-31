import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#2B2B2B' }}>
            <div class="container">
                <div class="row flex align-items-center">
                    <div class="col-12 col-md-6 text-white">
                        <p>Address: Road 2/B, Port Connecting Road, Chattogram-1231</p>
                        <small>&copy; Blue Origin seafood delivery service</small>
                    </div>
                    <div class="col-12 col-md-6">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#products">Products</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#blogs">Blogs</Nav.Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;