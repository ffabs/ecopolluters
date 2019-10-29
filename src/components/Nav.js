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
                  <div>Impact</div>
                </Link>
                <Link to="/science">
                  <div>Science</div>
                </Link>
                <Link to="/about">
                  <div>About</div>
                </Link>
              </div>

        </div>
  
      );
      
    }
  
  }
  
  export default Nav;