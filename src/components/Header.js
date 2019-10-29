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
            <Nav />
          }

          <hr></hr>
        </div>

    );
    
  }

}

export default Header;