import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nevigation.css';

const Nevigation = () => {
    return (
        <div className='nevigation'>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand className='title' href="#home">Wedding Diary</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">FAQ</Nav.Link>
            <Nav.Link href="#pricing">CONTACT</Nav.Link>
            <Nav.Link href="#pricing">WEDDING</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    );
};

export default Nevigation;