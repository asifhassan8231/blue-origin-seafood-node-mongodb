import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, googleSignOut } = useAuth();
    console.log(user);
    return (
        <div>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/home#home">BLUE ORIGIN</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto items">
                                <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                                <Nav.Link as={HashLink} to="/home#products">Products</Nav.Link>
                                <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
                                <Nav.Link as={HashLink} to="/home#blogs">Blogs</Nav.Link>
                                <Nav.Link as={HashLink} to="/order">My Orders</Nav.Link>
                                <Nav.Link as={HashLink} to="/manage">Manage All Orders</Nav.Link>
                                <Nav.Link as={HashLink} to="/addProduct">Add a new product</Nav.Link>
                                {!user && <Nav.Link as={HashLink} to="/login">Login/Register</Nav.Link>}
                                {user && <button onClick={googleSignOut}>LogOut</button>}
                                {user && <p className="text-white ms-2 my-auto">{user.displayName}</p>}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;