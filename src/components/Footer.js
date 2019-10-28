import React, { Component } from 'react';
import '../App.css';
import Nav from '../components/Nav';

class Footer extends Component {

  render() {

    return (        

        <div className="header">
          <hr></hr>
          <Nav />
          <p>Ecopolluters N.G.O. - All Rights Reserved</p>
        </div>

    );
    
  }

}

export default Footer;