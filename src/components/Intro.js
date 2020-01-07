import React, { Component } from 'react';
import '../App.css';
import './Intro.css';
import cow from '../images/cow.svg';
import co2 from '../images/co2.svg';
import water from '../images/water.svg';
import land from '../images/land.svg';

class Intro extends Component {
  
  render() {

    return (

        <div className="intro-container">
          <div className="intro-row">
            <div className="section-title intro-title">When you eat beef</div>
          </div>
          
          <div className="intro-row">
            <div className="intro-item">
              <div>
                <img className="intro-item-image" src={cow} alt="cowImpact"/>
              </div>
              <div>
                <div className="intro-item-title">Cows are killed</div>
                <div>More than 300 million cows are killed per year to cope with the increasing demand for beef.</div>
              </div>
            </div>
            <div className="intro-item">
              <div>
              <img className="intro-item-image" src={co2} alt="co2Impact"/>
              </div>
              <div>
                <div className="intro-item-title">CO2 is released</div>
                <div>N2O and NOx released during cows' digestion and crops fertilisers contribute to the green house effect.</div> 
              </div>
            </div>
          </div>

          <div className="intro-row">
            <div className="intro-item">
              <div>
              <img className="intro-item-image" src={water} alt="waterImpact"/>
              </div>
              <div>
                <div className="intro-item-title">Water is consumed</div>
                <div>Pastures and crops consumed by cows are irrigated and cows themselves drink water.</div>
              </div>
            </div>
            <div className="intro-item">
              <div>
              <img className="intro-item-image" src={land} alt="landImpact"/>
              </div>
              <div>
                <div className="intro-item-title">Land is occupied</div>
                <div>Crops are cultivated to feed cows and cows themselves occupy pastures.</div>
                {/* <div>This impact is aggravated when deforestation is caused as a result of the growing demand on beef.</div>  */}
              </div>
            </div>
          </div>

      </div>


    );
    
  }

}

export default Intro;