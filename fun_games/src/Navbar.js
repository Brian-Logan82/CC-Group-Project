import React from 'react';
import './App.css';
import {
    Navbar,
    Dropdown,
    
} from 'react-bootstrap';
import Homepage from './Homepage';
import Bio from './Bio';

import {
    BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Nav(){
    return (
      <Router> 
        <div>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Coding Games For All</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item ><Link className="nav-link dropdown-toggle" to="/Homepage" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Homepage
                    </Link></Dropdown.Item>
                        <Dropdown.Item ><Link className="dropdown-item" to="/Bio">Bio</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
          <Switch>
            <Route path="/Homepage">
                <Homepage />
            </Route>
            <Route path="/Bio">
                <Bio />
            </Route>
            <Route exact path="/">
			        <Homepage />
			      </Route>        
          </Switch>
        </div>
      </Router>
    );
  }


