import React, { Component } from 'react';
import '../App.css';

class CO2 extends Component {
  
  render() {

    return (        

        <div>
          <div className="section-title"> Green house gases: {this.props.CO2.toFixed(2)} kg CO2eq </div>
          <div className="comparison">Driving an average petrol car for {(this.props.CO2/0.12).toFixed(0)} km (5 liters per 100km)</div>
          <div className="comparison">Taking a {(this.props.CO2/1.5).toFixed(0)} minutes flight</div>
        </div>

    );
    
  }

}

export default CO2;