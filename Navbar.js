import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Homepage from './Homepage';
import Bio from './Bio';

import {
    Container, Row, Col
} from 'react-bootstrap';
import {
    BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

export default function TopNav(){
    return (
    <Router>
        <Navbar variant="dark" classname="navbar">
            <Nav activeKey="/Home">
                <Container>
                    <Row>
                        <Col>
                            <Nav.Item>
                                <h3>
                                    <Nav.Link href="/Homepage" className="homeLink">CODING GAMES FOR ALL</Nav.Link>
                                </h3>
                            </Nav.Item>
                        </Col>
                        <Col md="auto">......................................................................................................</Col>
                        <Col xs sm="1">
                            <Nav.Item>
                                <h3>
                                    <Nav.Link href="/Bio">CREATORS</Nav.Link>
                                </h3>
                            </Nav.Item>
                        </Col>

                    </Row>
                </Container>
             </Nav>
        </Navbar>

        <Switch>
            <Route path="/Homepage">
                <Homepage/>
            </Route>

            <Route path="/Bio">
                <Bio/>
            </Route>
            
            <Route path="/">
                <Homepage/>
            </Route>

        </Switch>
    </Router>
    )
}
