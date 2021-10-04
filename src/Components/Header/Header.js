import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <div className="header">
            <Navbar bg="primary" expand="lg">
                <Container fluid>
                    <Navbar.Brand ><span className="title-head">NAIMUL</span><span className="semi-title"> SPORTS ACADEMY</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '150px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/home" className="text-white">Home</Nav.Link>
                            <Nav.Link className="text-white" as={Link} to="/about">About</Nav.Link>
                            <Nav.Link className="text-white" as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link className="text-white" as={Link} to="/contucts">Contacts</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;