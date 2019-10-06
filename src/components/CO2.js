import React, { Component } from 'react';
import '../App.css';

class CO2 extends Component {
  
    render() {
  
      return (        
  
          <div>
            <h3> Greeen house gasses: {this.props.CO2.toFixed(2)} kg CO2eq </h3>
            <p>Distance with an average petrol car (5 liters per 100km): {(this.props.CO2/0.12).toFixed(2)} km</p>
            <p>Distance with an Hummer (14.7 liters per 100km): {(this.props.CO2/0.351624).toFixed(2)} km</p>
            <p>Amount of tofu (gr): {(this.props.CO2/0.0032).toFixed(2)}</p>
          </div>
  
      );
    }
  }

export default CO2;