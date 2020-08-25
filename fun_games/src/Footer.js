import React from 'react';
import './Footer.css';
import {
    Navbar, Container, Row, Col
} from 'react-bootstrap';


function Footer() {
  return (
<Container>
    <Row>
        <Col></Col>
        <Col>
            <Navbar bg="dark">
            <Navbar.Brand>2020 Copyright Cultivating Coders</Navbar.Brand>
            </Navbar>
        </Col>
        <Col></Col>
    </Row>
    
  </Container>  
  );
}

export default Footer;
