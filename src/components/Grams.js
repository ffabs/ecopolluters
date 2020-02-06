import React, { Component } from 'react';
import '../App.css';
import './Grams.css';

class Grams extends Component {

  render() {

    let measure = this.props.measure;

    return (        

        <div>
          <div className="grams"> 
            <div>
                This is the effect of {this.props.amount}
                {measure === "grams" &&
                  <div className="unit-text"> grams of {this.props.type} </div>
                }
                {measure === "liters" &&
                  <div className="unit-text"> liters of {this.props.type} </div>
                }
                {measure === "item" &&
                  <div className="unit-text"> {this.props.type} </div>
                }
                on the environment:
            </div>
          </div>
        </div>

    );
    
  }

}

export default Grams;