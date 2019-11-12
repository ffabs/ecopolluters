import React, { Component } from 'react';
import '../App.css';

class Land extends Component {
  
  render() {

    return (        

        <div>
          <h3> Land usage: {this.props.land.toFixed(2)} square meters</h3>
          <p>Chemical toilets: {(this.props.land/1.42).toFixed(0)} </p>
          <p>Average 1 person flat in the world: {(this.props.land/52.6).toFixed(0)}</p>
        </div>

    );
    
  }

}

export default Land;