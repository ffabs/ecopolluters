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
          <div className="menu">
            <div className="logo">
              <Link to="/" style={{ textDecoration: 'none' }}>
                Ecopolluters
              </Link>
            </div>
            <ul className="desktop">
              <Link to="/"><li className={home}>Home</li></Link>
              <Link to="/impact"><li className={impact}>Impact</li></Link>
              <Link to="/science"><li className={science}>Science</li></Link>
              <Link to="/about"><li className={about}>About</li></Link>
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
              <Nav {...this.props}/>
            </div>
          }

        </div>

    );
    
  }

}

export default Header;