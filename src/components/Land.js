import React, { Component } from 'react';
import '../App.css';

class Land extends Component {
  
  render() {

    return (        

        <div>
          <h3> Land usage: {this.props.land.toFixed(2)} square meters</h3>
          <p>Tennis courts: {(this.props.land/260.7569).toFixed(2)}</p>
          <p>Parking lots: {(this.props.land/25).toFixed(2)} </p>
          <p>Average 1 person flat in HK: {(this.props.land/15).toFixed(2)}</p>
          <p>Average 1 person flat in US: {(this.props.land/77).toFixed(2)}</p>
          <p>Amount of tofu (gr): {(this.props.land/0.0035).toFixed(2)}</p>
        </div>

    );
    
  }

}

export default Land;