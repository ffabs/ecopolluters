import React, { Component } from 'react';
import '../App.css';

class Land extends Component {
  
  render() {

    return (        

        <div>
          <div className="section-title"> Land usage: {this.props.land.toFixed(2)} square meters</div>
          <div className="comparison">Chemical toilets: {(this.props.land/1.42).toFixed(0)} </div>
          <div className="comparison">Average 1 person flat in the world: {(this.props.land/52.6).toFixed(0)}</div>
        </div>

    );
    
  }

}

export default Land;