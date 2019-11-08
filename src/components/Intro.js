import React, { Component } from 'react';
import '../App.css';
import cow from '../images/cow.svg';
import co2 from '../images/co2.svg';
import water from '../images/water.svg';
import land from '../images/land.svg';

class Intro extends Component {
  
  render() {

    return (

        <div className="grid-container">
          <div className="row">
            <div className="section-title intro-title">When you eat beef</div>
          </div>
          
          <div className="row">
            <div className="item-intro">
              <div>
                <img className="intro-image" src={cow} alt="cowImpact"/>
              </div>
              <div>
                <div className="item-intro-title">A cow</div>
                <div>dies for you</div>
              </div>
            </div>
            <div className="item-intro">
              <div>
              <img className="intro-image" src={co2} alt="co2Impact"/>
              </div>
              <div>
                <div className="item-intro-title">Co2</div>
                <div>from the digestion, breathing and farts of the cow</div> 
              </div>
            </div>
          </div>

          <div className="row">
            <div className="item-intro">
              <div>
              <img className="intro-image" src={water} alt="waterImpact"/>
              </div>
              <div>
                <div className="item-intro-title">Water</div>
                <div>to make the cow grow up</div>
              </div>
            </div>
            <div className="item-intro">
              <div>
              <img className="intro-image" src={land} alt="landImpact"/>
              </div>
              <div>
                <div className="item-intro-title">Land</div>
                <div>is reserved for the cow</div> 
              </div>
            </div>
          </div>

      </div>


    );
    
  }

}

export default Intro;