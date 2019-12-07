import React, { Component } from 'react';
import '../App.css';
import waterimpact from '../images/water-impact.png';
import shower from '../images/shower.png';

class Land extends Component {
  
  render() {

    return (        

        <div>
          <img className="impact-image" src={waterimpact} alt="waterImpact"/>
          <div className="section-title pollution">{this.props.land.toFixed(2)} sqm of land</div>
          <div className="same-as">Same as</div>
          <div className="comparison-section">
            <div className="comparison-element">
              <div>
                <img className="comparison-image" src={shower} alt="showerComparison"/>
              </div>
              <div className="comparison-text">
                <div className="comparison">{(this.props.land/1.42).toFixed(0)} chemical toilets</div>
              </div>
            </div>
            <div className="comparison-element">
              <div>
                <img className="comparison-image" src={shower} alt="showerComparison"/>
              </div>
              <div className="comparison-text">
                <div className="comparison">{(this.props.land/52.6).toFixed(0)} apartments</div>
                <div className="comparison-support">Average 1 person flat in the world</div>
              </div>
            </div>
          </div>
        </div>

    );
    
  }

}

export default Land;