import React, { Component } from 'react';
import '../App.css';
import HamburgerMenu from 'react-hamburger-menu';
import {Link} from 'react-router-dom';
import Nav from '../components/Nav';
import ecopolluters from '../images/ecopolluters.svg';
import logoicon from '../images/logoicon.svg';

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
    let impact = 'impact-button impact-button-menu';
    let science = '';
    let about= '';
    switch(this.props.page) {
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
              <Link to="/">
                <img src={logoicon} alt="ecopolluters-icon"/>
                <img src={ecopolluters} alt="ecopolluters"/>
              </Link>
            </div>            
              <div className="desktop"><Link to="/impact"><button className={impact}>CALCULATE YOUR IMPACT</button></Link></div>
              <div className="desktop"><Link to="/science"><li className={science}>SCIENTIFICAL SOURCES</li></Link></div>
              <div className="desktop"><Link to="/about"><li className={about}>ABOUT US</li></Link></div>
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