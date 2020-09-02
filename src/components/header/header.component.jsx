import React from 'react';
import './header.styles.css'
import { Link } from 'react-router-dom';

//          React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const Header = () => (
    <Navbar collapseOnSelect expand="lg" className='navbar'>
        <Navbar.Brand className="navbar-brand">
            <Link to="/" className="navbar-brand-image-link">
                <img
                    className="navbar-brand-image d-inline-block align-top nav-link"
                    alt=""
                    src="/logo-el-camion.png"
                    // width="100%"
                    height="60px"
                    text-align="left"
                />
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Link to="/" className="nav-link">ACCUEIL</Link>
                <Link to="/menu" className="nav-link">MENU</Link>
                <Link to="/find-us" className="nav-link">EMPLACEMENTS</Link>
                <Link to="/about-us" className="nav-link">A PROPOS</Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)


export default Header;