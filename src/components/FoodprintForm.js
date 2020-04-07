import React, { Component } from 'react';
import '../App.css';
import './FoodprintForm.css';
import Data from '../impact-data.json';
import Icon from '../components/Icon';

  
class FoodprintForm extends Component {

    updateFoodprint = event => {
        let foodprintInput = Number(event.target.value);
        let foodprintState = this.props.foodprintState;
        this.props.handleFoodprintInput(foodprintInput, foodprintState);
      }

      morefood = event => {
        let foodprintState = this.props.foodprintState;
        let currentValue = this.props[foodprintState];
        let measureForm = Data[this.props.categoryForm][this.props.foodForm].measure;
        let newValue = Number(currentValue);
        if (measureForm !== "grams") {
            newValue = newValue + 1;
        } else {
            newValue = newValue + 50;
        }
        this.props.handleFoodprintInput(newValue, foodprintState);
      }
      
      lessfood = event => {
        let foodprintState = this.props.foodprintState;
        let currentValue = this.props[foodprintState];
        if (currentValue > 0) {
            let measureForm = Data[this.props.categoryForm][this.props.foodForm].measure;
            let newValue = Number(currentValue);
            if (measureForm !== "grams") {
                newValue = newValue - 1;
            } else {
                newValue = newValue - 50;
            }
            this.props.handleFoodprintInput(newValue, foodprintState);
        }
      }

    render() {

        let foodForm = this.props.foodForm;
        let defaultvaluefood = this.props.foodprintState;
        let defaultvalueFooprintInput = this.props[defaultvaluefood];
        let foodprintRefresh = this.props.foodprintRefresh;
        if (foodprintRefresh) {
            defaultvalueFooprintInput = this.props[defaultvaluefood];
        }

        let foodprintInputLess = "foodprint-input-less foodprint-input-less-inactive";
        if (this.props[defaultvaluefood] <= 0) {
            foodprintInputLess = "foodprint-input-less foodprint-input-less-inactive";
        } else {
            foodprintInputLess = "foodprint-input-less";
        }

        let measureForm = Data[this.props.categoryForm][this.props.foodForm].measure;
    
    
        return (        

            <div className="foodprint-form">
                <button 
                    className={foodprintInputLess}
                    type="button" 
                    onClick={this.lessfood}
                >
                    -
                </button>
                <input
                    className="foodprint-input" 
                    type="number" 
                    name="amount"
                    // defaultValue={defaultvalueFooprintInput}
                    value={defaultvalueFooprintInput}
                    min="0"
                    onChange={this.updateFoodprint}
                />
                {measureForm === 'grams' &&
                    <div className="foodprint-measure">
                        <div className="foodprint-measure-text">g</div>
                    </div>
                }
                {measureForm === 'liters' &&
                    <div className="foodprint-measure">
                        <div className="foodprint-measure-text">l</div>
                    </div>
                }
                <button 
                    className="foodprint-input-more"
                    type="button" 
                    onClick={this.morefood}
                >
                    +
                </button>
                <div className="foodprint-foodlabel">
                    <Icon icon={foodForm}/>
                </div>
            </div>
    
        );
        
    }

}

export default FoodprintForm;