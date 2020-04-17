import React, { Component } from 'react';
import '../App.css';
import './Header.css';
import HamburgerMenu from 'react-hamburger-menu';
import {Link} from 'react-router-dom';
import Nav from '../components/Nav';
import ecopolluters from '../images/ecopolluters.svg';
import ecopollutersWhite from '../images/ecopollutersWhite.svg';
import logoicon from '../images/logoicon2x.png';

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
    let impact = '';
    let science = '';
    let about= '';
    let foodprint= 'impact-button menu-impact-button';
    let hamburger = 'hamburger';
    switch(this.props.page) {
      case "Impact":
        // impact += ' impact-button-impactpage';
        impact += ' current';
        break;
      case "Science":
        science += ' current';
        break;
      case "About":
        about += ' current';
        break;
      case "Foodprint":
        impact += ' hide';
        science += ' hide';
        about += ' hide';
        foodprint += ' hide';
        hamburger = 'hide';
        break;
      case "Home":
        impact += ' white';
        science += ' white';
        about += ' white';
        foodprint += ' impact-button-impactpage';
        break;
      default:
        foodprint = 'impact-button menu-impact-button';
    }

    return (        

        <div className="header">
            <div className="logo">
              <Link to="/">
                <img className="logoicon" src={logoicon} alt="ecopolluters-icon"/>
                {this.props.logoColor === "white" &&
                  <img src={ecopollutersWhite} alt="ecopolluters"/>
                }
                {this.props.logoColor !== "white" &&
                  <img src={ecopolluters} alt="ecopolluters"/>
                }
              </Link>
            </div>
            <div className="menu">
              <div className="desktop"><Link to="/foodprint/step0"><button className={foodprint}>FIND OUT YOUR FOODPRINT</button></Link></div>
              <div className="desktop"><Link to="/impact"><li className={impact}>FOOD DETAILS</li></Link></div>
              <div className="desktop"><Link to="/science"><li className={science}>SCIENTIFIC SOURCES</li></Link></div>
              <div className="desktop"><Link to="/about"><li className={about}>ABOUT US</li></Link></div>
            </div>  
            <div className={hamburger}>
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