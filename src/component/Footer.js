import React, { Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar} from 'react-bootstrap';
import '../App.css';

class Footer extends Component {
    render() {
       return (
          <div className="footer">
             <Navbar bg="dark" variant="dark">
                <Navbar.Brand id = "text" href="#home">
                 Contacts
                </Navbar.Brand>
            </Navbar>
            </div> 
       );
    }
 }
 export default Footer;