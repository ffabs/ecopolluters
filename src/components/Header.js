import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  
  render() {

    return (        

        <div class="header">
          <div className="domain">Ecopolluters</div>
          <div><a href="/">Home</a></div>
          <div><a href="/science">Scientific sources</a></div>
          <div><a href="/about">About us</a></div>
          <hr></hr>
        </div>

    );
    
  }

}

export default Header;