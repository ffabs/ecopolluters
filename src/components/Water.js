import React, { Component } from 'react';
import '../App.css';

class Water extends Component {
  
    render() {
  
      return (        
  
          <div>
            <h3> Water: {this.props.water.toFixed(2)} liters </h3>
            <p>Oktoberfest beers: {this.props.water.toFixed(2)}</p>
            <p>Average American showers: {(this.props.water/65.1).toFixed(2)} </p>
            <p>Amount of tofu (gr): {(this.props.water/0.149).toFixed(2)}</p>
          </div>
  
      );
    }
  }

export default Water;