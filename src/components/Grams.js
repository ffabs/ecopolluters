import React, { Component } from 'react';
import '../App.css';
import './Grams.css';
import './Solution.css';
import Icon from '../components/Icon';
import Data from '../impact-data.json';

class Grams extends Component {

  render() {

    let measure = this.props.measure;

    let nutritionalValues = Data[this.props.category][this.props.type]["nutritional values"];
    
    let grams = this.props.grams;
    
    let calories = (grams*nutritionalValues.calories).toFixed(0);
    let proteins = (grams*nutritionalValues.proteins).toFixed(0);
    let carbs = (grams*nutritionalValues.carbs).toFixed(0);
    let fats = (grams*nutritionalValues.fats).toFixed(0);

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
              <div>{calories}</div>
              <div>Calories</div>
            </div>
            <div className="nutritional-value">
              <div>{proteins+" g"}</div>
              <div>Proteins</div>
            </div>
            <div className="nutritional-value">
              <div>{carbs+" g"}</div>
              <div>Carbs</div>
            </div>
            <div className="nutritional-value">
              <div>{fats+" g"}</div>
              <div>Fats</div>
            </div>
          </div>
            
      </div>

    );
    
  }

}

export default Grams;