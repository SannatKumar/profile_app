import React, { Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import rajkumar from '../rajkumar.jpg';

import '../App.css';

class Main extends Component {
    render() {
       return (
        <main className="app-body">
          <div className = "pic-title">
        <img src={rajkumar} className="profile-pic" alt="rajkumar" />
        <br /><br />
        <h2 className = "username">Raj Kumar Tiwari</h2>
        </div>
        <br />
        <br/>
        <p>
          Below Link has all my project
        </p>
        <a
          className="App-link"
          href="http://rajkumarprofile.epizy.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Profile
        </a>
        <br />
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign In
        </a>
        <br />
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Log In
        </a>

      </main>
       );
    }
 }
 export default Main;