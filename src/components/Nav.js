import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

class Nav extends Component {
    
    render() {
      let home = '';
      let impact = '';
      let science = '';
      let about= '';
      switch(this.props.page) {
        case "Home":
          home += ' current';
          break;
        case "Impact":
          impact += ' current';
          break;
        case "Science":
          science += ' current';
          break;
        case "About":
          about += ' current';
      }

      return (        
  
          <div className="header">
            
              <div className="nav">
                <Link to="/">
                  <div className={home}>Home</div>
                </Link>
                <Link to="/impact">
                  <div className={impact}>Impact</div>
                </Link>
                <Link to="/science">
                  <div className={science}>Science</div>
                </Link>
                <Link to="/about">
                  <div className={about}>About</div>
                </Link>
              </div>

        </div>
  
      );
      
    }
  
  }
  
  export default Nav;