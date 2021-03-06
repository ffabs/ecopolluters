import React, { Component } from 'react';
import '../App.css';
import './Pollution.css';
import co2impact from '../images/co2-impact.png';
import car from '../images/car.png';
import flight from '../images/flight.png';

class CO2 extends Component {
  
  render() {

    let pollutionStyle = "pollution-impact pollution-border-top pollution-border-right pollution-corner-bottomleft";
    if (this.props.foodprint === "true") {
      pollutionStyle = "foodprint-sameas";
    }

    return (        
      
       <div className={pollutionStyle}>
          {this.props.foodprint !== "true" && <div>
          <div className="pollution-title pollution"> {this.props.CO2.toFixed(2)} kg</div>
          <div className="impact-description"> of CO2 produced</div>
          <img className="impact-image" src={co2impact} alt="co2Impact"/>
          </div>}
          <div className="same-as">Same as</div>
          <div className="comparison-section">
            <div className="comparison-element">
              <div>
                <img className="comparison-image" src={car} alt="carComparison"/>
              </div>
              <div className="comparison-text">
                <div className="comparison">Driving for {(this.props.CO2/0.12).toFixed(0)} km</div>
                {/* <div className="comparison-support">average petrol - 5 liters per 100km</div> */}
                <div className="comparison-support">average car - 5 l per 100km</div>
              </div>
            </div>
            <div className="comparison-element">
              <div>
                <img className="comparison-image" src={flight} alt="flightComparison"/>
              </div>
              <div className="comparison-text">
                <div className="comparison">Taking a {(this.props.CO2/1.5).toFixed(0)} minutes flight</div>
              </div>
            </div>
          </div>
        </div>

    );
    
  }

}

export default CO2;