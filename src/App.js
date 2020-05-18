import React, { Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-bootstrap';

import './App.css';

import Header from './component/Header.js';
import Main from './component/Main.js';
import Footer from './component/Footer.js';


class App extends Component {
  render() {
      return (
        <div className="App">
        <div>
          < Header />
        </div>
        
        
          < Main />
          <div>
          < Footer />
        </div>
        </div>
  );
}
}

export default App;
