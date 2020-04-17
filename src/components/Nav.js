import React, { Component } from 'react';
import '../App.css';
import './Nav.css';
import './Header.css';
import {Link} from 'react-router-dom';

class Nav extends Component {
    
    render() {
      let home = 'hide';
      let impact = '';
      let science = '';
      let about = '';
      let foodprint = '';
      switch(this.props.page) {
        case "Home":
          impact += ' white';
          science += ' white';
          about += ' white';
          foodprint += ' white';
          break;
        case "Impact":
          impact += ' current';
          break;
        case "Science":
          science += ' current';
          break;
        case "About":
          about += ' current';
          break;
        case "Footer":
          home -= ' hide';
          break;
        default:
          home = 'hide';
      }

      return (        
  
          <div className="header">
            
              <div className="nav">
                <Link to="/">
                  <div className={home}>HOME</div>
                </Link>
                <Link to="/foodprint/step0">
                  <div className={foodprint}>FIND OUT YOUR FOODPRINT</div>
                </Link>
                <Link to="/impact">
                  <div className={impact}>FOOD DETAILS</div>
                </Link>
                <Link to="/science">
                  <div className={science}>SCIENTIFIC SOURCES</div>
                </Link>
                <Link to="/about">
                  <div className={about}>ABOUT US</div>
                </Link>
              </div>

        </div>
  
      );
      
    }
  
  }
  
  export default Nav;