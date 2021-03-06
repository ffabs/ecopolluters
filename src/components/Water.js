import React, { Component } from 'react';
import '../App.css';
import './Pollution.css';
import waterimpact from '../images/water-impact.png';
import drink from '../images/drink.png';
import shower from '../images/shower.png';


class Water extends Component {
  
  render() {

    let pollutionStyle = "pollution-impact pollution-border-top pollution-border-right";
    if (this.props.foodprint === "true") {
      pollutionStyle = "foodprint-sameas";
    }

    return (        

        <div className={pollutionStyle}>
          {this.props.foodprint !== "true" && <div>
          <div className="pollution-title pollution">{this.props.water.toFixed(2)} liters</div>
          <div className="impact-description"> of water consumed</div>
          <img className="impact-image" src={waterimpact} alt="waterImpact"/>
          </div>}
          <div className="same-as">Same as</div>
          <div className="comparison-section">
            <div className="comparison-element">
              <div>
                <img className="comparison-image" src={drink} alt="drinkComparison"/>
              </div>
              <div className="comparison-text">
                <div className="comparison">Drinking for {(this.props.water/2.56).toFixed(0)} days</div>
                <div className="comparison-support">2.6 liters per day</div>
              </div>
            </div>
            <div className="comparison-element">
              <div>
                <img className="comparison-image" src={shower} alt="showerComparison"/>
              </div>
              <div className="comparison-text">
                <div className="comparison">Showering {(this.props.water/55.573).toFixed(0)} times</div>
                <div className="comparison-support">for 7 minutes each time</div>
              </div>
            </div>
          </div>
        </div>

    );
    
  }

}

export default Water;