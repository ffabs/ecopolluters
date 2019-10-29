import React, { Component } from 'react';
import '../App.css';
import hamburgerImpact from '../hamburgerImpact.png';
import Greta from '../Greta.png';

class Intro extends Component {
  
  render() {

    return (        

        <div> 
            <h1>Eat beef?</h1>
            <h4>Find out how beef is destroying the world</h4>
            <img src={hamburgerImpact} className="intro" alt="hamburgerImpact"/>
            <h3>This is what an hamburg causes</h3>
            <p>A cow dies for you</p>
            <p>19.90 kg of Co2 is released in the air</p>
            <p>290.24 l of water is wasted and polluted</p>
            <p>65.24 mq of land is used to farm the cow</p>

            <div>
              <h1>What is your impact?</h1>
              <p>We preparred kick-ass algorithm to tell you how bad you are</p>
              <img src={Greta} className="greta" alt="Greta" />
            </div>
        </div>

    );
    
  }

}

export default Intro;