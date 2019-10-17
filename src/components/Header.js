import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

class Header extends Component {
  
  render() {

    return (        

        <div className="header">
          <div className="domain">Ecopolluters</div>
          <Link to="/">
            <div>Home</div>
          </Link>
          <Link to="/impact">
            <div>Calculate your impact</div>
          </Link>
          <Link to="/science">
            <div>Scientific sources</div>
          </Link>
          <Link to="/about">
            <div>About us</div>
          </Link>
          <hr></hr>
        </div>

    );
    
  }

}

export default Header;