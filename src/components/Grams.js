import React, { Component } from 'react';
import '../App.css';

class Grams extends Component {

  render() {

    return (        

        <div>
          <h3> Total amount of beef: {this.props.grams} grams</h3>
        </div>

    );
    
  }

}

export default Grams;