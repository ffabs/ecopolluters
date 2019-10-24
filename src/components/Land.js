import React, { Component } from 'react';
import '../App.css';

class Land extends Component {
  
  render() {

    return (        

        <div>
          <h3> Land usage: {this.props.land.toFixed(2)} square meters</h3>
          <p>Parking lots: {(this.props.land/25).toFixed(2)} </p>
          <p>Average 1 person flat in the world: {(this.props.land/52.6).toFixed(2)}</p>
        </div>

    );
    
  }

}

export default Land;