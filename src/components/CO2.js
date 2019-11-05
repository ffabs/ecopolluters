import React, { Component } from 'react';
import '../App.css';

class CO2 extends Component {
  
  render() {

    return (        

        <div>
          <h3> Green house gases: {this.props.CO2.toFixed(2)} kg CO2eq </h3>
          <p>Driving an average petrol car (5 liters per 100km) for {(this.props.CO2/0.12).toFixed(2)} km</p>
          <p>A person taking a plane for {(this.props.CO2/1.5).toFixed(2)} minutes</p>
        </div>

    );
    
  }

}

export default CO2;