import React, { Component } from 'react';
import '../App.css';

class Water extends Component {
  
    render() {
  
      return (        
  
          <div>
            <h3> Water: {this.props.water} liters </h3>
            <p>Oktoberfest beers: {this.props.water}</p>
            <p>Average American showers: {this.props.water/65.1} </p>
            <p>Amount of tofu (gr): {this.props.water/0.149}</p>
          </div>
  
      );
    }
  }

export default Water;