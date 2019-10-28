import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

class Nav extends Component {
    
    render() {
  
      return (        
  
          <div className="header">
            
              <div className="nav">
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
              </div>
        </div>
  
      );
      
    }
  
  }
  
  export default Nav;