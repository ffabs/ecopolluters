import React, { Component } from 'react';
import '../App.css';
import './Grams.css';
import './Solution.css';
import Icon from '../components/Icon';

class Grams extends Component {

  render() {

    let measure = this.props.measure;

    return (        

      <div className="grams"> 

          <div className="alternative-items"> 
            <div className="solution-title-bold">
              <Icon icon={this.props.type}/>
            </div>
            <div>
              <div className="alternative-amount">&nbsp;• {this.props.amount+" "} </div>
              {measure === "grams" &&
                  <div className="alternative-amount"> g </div>
              }
              {measure === "liters" &&
                  <div className="alternative-amount"> l </div>
              }
            </div>
          </div>
          <div className="nutritional-values">
            <div className="nutritional-value">
              <div>{this.props.amount}</div>
              <div>Calories</div>
            </div>
            <div className="nutritional-value">
              <div>{this.props.amount+" g"}</div>
              <div>Proteins</div>
            </div>
            <div className="nutritional-value">
              <div>{this.props.amount+" g"}</div>
              <div>Carbs</div>
            </div>
            <div className="nutritional-value">
              <div>{this.props.amount+" g"}</div>
              <div>Fats</div>
            </div>
          </div>
            
      </div>

    );
    
  }

}

export default Grams;