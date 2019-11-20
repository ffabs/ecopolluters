import React, { Component } from 'react';
import '../App.css';

class Water extends Component {
  
  render() {

    return (        

        <div>
          <div className="section-title pollution">{this.props.water.toFixed(2)} liters of water</div>
          <div className="comparison">Drinking for {(this.props.water/2.56).toFixed(0)} days (2.56 liters per day)</div>
          <div className="comparison">Showering {(this.props.water/55.573).toFixed(0)} times (for 7 minutes each time)</div>
        </div>

    );
    
  }

}

export default Water;