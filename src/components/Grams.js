import React, { Component } from 'react';
import '../App.css';

class Grams extends Component {

  render() {

    return (        

        <div>
          <div className="grams"> 
            <div>This is what</div>
            <div className="grams-variable" >{this.props.grams} grams </div>
            <div>of beef produce:</div>
          </div>
        </div>

    );
    
  }

}

export default Grams;