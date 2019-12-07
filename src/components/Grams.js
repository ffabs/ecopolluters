import React, { Component } from 'react';
import '../App.css';

class Grams extends Component {

  render() {

    return (        

        <div>
          <div className="grams"> 
            <div>This is what {this.props.grams} grams of beef produce:</div>
          </div>
        </div>

    );
    
  }

}

export default Grams;