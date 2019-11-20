import React, { Component } from 'react';
import '../App.css';

class Land extends Component {
  
  render() {

    return (        

        <div>
          <div className="section-title pollution">{this.props.land.toFixed(2)} sqm of land</div>
          <div className="comparison">{(this.props.land/1.42).toFixed(0)} chemical toilets</div>
          <div className="comparison">{(this.props.land/52.6).toFixed(0)} apartments (Average 1 person flat in the world)</div>
        </div>

    );
    
  }

}

export default Land;