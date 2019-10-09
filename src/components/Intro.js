import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';

class Intro extends Component {
  
  render() {

    return (        

        <div> 
            <h1>Eat beef?</h1>
            <h4>Find out how beef is destroying the world</h4>
            <img src={logo} className="intro" alt="logo" />
            <h3>This is what an hamburg causes</h3>
            <p>A cow dies for you</p>
            <p>56 kg of Co2 is released in the air</p>
            <p>78 l of water is wasted and polluted</p>
            <p>28 mq of land is used to farm the cow</p>
          </div>

    );
    
  }

}

export default Intro;