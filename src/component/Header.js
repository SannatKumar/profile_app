import React, { Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar} from 'react-bootstrap';

class Header extends Component {
    render() {
       return (
          <div>
             <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                 PORT FOLIO
                </Navbar.Brand>
            </Navbar>
            </div>
       );
    }
 }
 export default Header;