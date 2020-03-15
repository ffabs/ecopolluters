import React, { Component } from 'react';
import '../App.css';
import './Pollution.css';
import landimpact from '../images/land-impact.png';
import toilets from '../images/toilets.png';
import flat from '../images/flat.png';

class Land extends Component {
  
  render() {

    return (        

        <div className="pollution-impact pollution-border-top">
          <div className="pollution-title pollution">{this.props.land.toFixed(2)} sqm</div>
        <div className="impact-description"> of land occupied</div>
          <img className="impact-image" src={landimpact} alt="landImpact"/>
          <div className="same-as">Same as</div>
          <div className="comparison-section">
            <div className="comparison-element">
              <div>
                <img className="comparison-image" src={toilets} alt="toiletsComparison"/>
              </div>
              <div className="comparison-text">
                <div className="comparison">The space taken by {(this.props.land/1.42).toFixed(0)} chemical toilets</div>
              </div>
            </div>
            <div className="comparison-element">
              <div>
                <img className="comparison-image" src={flat} alt="flatComparison"/>
              </div>
              <div className="comparison-text">
                <div className="comparison">The size of {(this.props.land/52.6).toFixed(0)} flats</div>
                <div className="comparison-support">Average 1 person flat</div>
              </div>
            </div>
          </div>
        </div>

    );
    
  }

}

export default Land;