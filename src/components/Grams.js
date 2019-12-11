import React, { Component } from 'react';
import '../App.css';

class Grams extends Component {

  render() {

    return (        

        <div>
          <div className="grams"> 
            <div>This is the effect of {this.props.grams} grams of beef on the environment:</div>
          </div>
        </div>

    );
    
  }

}

export default Grams;