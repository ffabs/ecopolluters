import React, { Component } from 'react';
import '../App.css';
import cover from '../images/cover.svg';
import cow from '../images/cow.svg';
import co2 from '../images/co2.svg';
import water from '../images/water.svg';
import land from '../images/land.svg';
import Header from '../components/Header';
import {Link} from 'react-router-dom';

class Intro extends Component {
  
  render() {

    return (        

        <div>
          <div className="cover">
            <Header page={'Home'} />
            <div className="catchy">
              <p className="cover-title">Eat beef?</p>
              <p className="cover-support">Find out your impact on the environment and what you can do</p>
              <Link to="/impact">
                <button className="impact-button impact-button-intro">CALCULATE YOUR IMPACT</button>
              </Link>
            </div>
            <img className="cover-image" src={cover} alt="hamburgerImpact"/>
          </div>
            <p className="section-title">When you eat beef</p>
            <div className="grid-container">
              <div className="item1 intro">
                <div>
                  <img src={cow} alt="cowImpact"/>
                </div>
                <div>
                  <h4>A cow</h4>
                  <p>dies for you</p>
                </div>
              </div>
              <div className="item2 intro">
                <div>
                <img src={co2} alt="co2Impact"/>
                </div>
                <div>
                  <h4>Co2 is released in the air</h4>
                  <p>from the digestion, breathing and farts of the cow</p> 
                </div>
              </div>
              <div className="item3 intro">
                <div>
                <img src={water} alt="waterImpact"/>
                </div>
                <div>
                  <h4>Liters of clean water used</h4>
                  <p>to make the cow grow up</p>
                </div>
              </div>
              <div className="item4 intro">
                <div>
                <img src={land} alt="landImpact"/>
                </div>
                <div>
                  <h4>Land</h4>
                  <p>is reserved for the cow</p> 
                </div>
              </div>
            </div>
        </div>

    );
    
  }

}

export default Intro;