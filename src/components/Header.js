import React, { Component } from 'react';
import '../App.css';
import HamburgerMenu from 'react-hamburger-menu';
import {Link} from 'react-router-dom';
import Nav from '../components/Nav';

class Header extends Component {
  constructor() {
		super();
		this.state = {
			open: false
		};
  }
	handleClick() {
    this.setState({
        open: !this.state.open
    });
  }
  
  render() {

    return (        

        <div className="header">
          <div className="menu">
            <div className="logo">
              <Link to="/" style={{ textDecoration: 'none' }}>
                Ecopolluters
              </Link>
            </div>
            <ul className="desktop">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/impact">Impact</Link></li>
              <li><Link to="/science">Science</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
            <div className="hamburger">
              <HamburgerMenu
                isOpen={this.state.open}
                menuClicked={this.handleClick.bind(this)}
                // width={18}
                // height={15}
                // strokeWidth={1}
                // rotate={0}
                // color='black'
                // borderRadius={0}
                // animationDuration={0.3}
              />
            </div>
          </div>
          
          {this.state.open === true &&
            <div className="mobile"> 
              <Nav />
            </div>
          }

          <hr></hr>
        </div>

    );
    
  }

}

export default Header;