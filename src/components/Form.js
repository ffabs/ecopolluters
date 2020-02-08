import React, { Component } from 'react';
import '../App.css';
import './Form.css';
import Data from '../impact-data.json';

class Form extends Component {
  
   render() {
    
    let impact = 'impact-button form-button impact-button-impactpage impact-button-impactpage-form';
    if (this.props.newCalculation || this.props.calculation==false) {
      impact += ' form-button-new-calculation';
    } else {
      impact += ' form-button-old-calculation';
    };
    
    let defaultAmount = this.props.tempAmount;
    console.log(defaultAmount);

    let measure = Data[this.props.tempCategory][this.props.tempType].measure;


    return (
      <form id="form-impact-id" className="form-impact" onSubmit={e => { e.preventDefault(); }}>
        <div className="form-input-section-impactpage">
            <div>
              {this.props.tempCategory === 'animal' &&
                <select className="form-input form-type" name="type" defaultValue={this.props.tempType} onChange={this.props.handleType}>
                      <option value="beef"> 🐄 Beef </option>
                      <option value="lamb"> 🐑 Lamb </option>
                      <option value="crustaceans"> 🦀 Crustaceans </option>
                      <option value="cheese"> 🧀 Cheese </option>
                      <option value="fish"> 🐟 Fish </option>
                      <option value="pork"> 🐖 Pork </option>
                      <option value="chicken"> 🐓 Chicken </option>
                      <option value="eggs"> 🥚 Eggs </option>
                      <option value="milk"> 🥛 Milk </option>
                </select>
              }
              {this.props.tempCategory === 'fruits' &&
                <select className="form-input form-type" name="type" defaultValue={this.props.tempType} onChange={this.props.handleType}>
                      <option value="tomatoes"> 🍅 Tomatoes </option>
                      <option value="onions"> ⚪ Onions </option>
                      <option value="nuts"> 🌰 Nuts </option>
                      <option value="groundnuts"> 🥜 Groundnuts </option>
                      <option value="root vegetables"> 🥕 Root vegetables </option>
                      <option value="potatoes"> 🥔 Potatoes </option>
                      <option value="cassava"> 🍠 Cassava </option>
                      <option value="brassicas"> 🥦 Brassicas </option>
                      <option value="other vegetables"> 🥗 Other vegetables </option>
                      <option value="citrus fruit"> 🍋 Citrus fruit </option>
                      <option value="bananas"> 🍌 Bananas </option>
                      <option value="apples"> 🍏 Apples </option>
                      <option value="berries and grapes"> 🍇 Berries and grapes </option>
                      <option value="other fruits"> 🍓 Other fruits </option>
                </select>
              }
              {this.props.tempCategory === 'grains' &&
                <select className="form-input form-type" name="type" defaultValue={this.props.tempType} onChange={this.props.handleType}>
                      <option value="wheat flour"> 🥖 Wheat flour </option>
                      <option value="corn flour"> 🌽 Corn flour </option>
                      <option value="beer"> 🍺 Beer </option>
                      <option value="oatmeal"> 🥣 Oatmeal </option>
                      <option value="rice"> 🍚 Rice </option>
                      <option value="other legumes"> 🍲 Other legumes </option>
                      <option value="peas"> 🌱 Peas </option>
                </select>
              }
              {this.props.tempCategory === 'otherfood' &&
                <select className="form-input form-type" name="type" defaultValue={this.props.tempType} onChange={this.props.handleType}>
                      <option value="soymilk"> 🥛 Soymilk </option>
                      <option value="tofu"> 🍢 Tofu </option>
                      <option value="cane sugar"> 🍬 Cane sugar </option> 
                      <option value="beet sugar"> 🍬 Beet sugar </option>
                      <option value="soybean oil"> 🌿 Soybean oil </option> 
                      <option value="palm oil"> 🌴 Palm oil </option> 
                      <option value="sunflower oil"> 🌻 Sunflower oil </option> 
                      <option value="rapeseed oil"> 🌼 Rapeseed oil </option> 
                      <option value="olive oil"> 🌱 Olive oil </option> 
                      <option value="wine"> 🍷 Wine </option> 
                      <option value="coffee"> ☕ Coffee </option> 
                      <option value="dark chocolate"> 🍫 Dark chocolate </option> 
                </select>
              }

          <div className="form-3level">
            
            <div className="form-button-position-impact">
              
              <div className="form-amountandunit">
                <input  
                  id="form-number-id"
                  className="form-input form-number" 
                  type="number" 
                  name="amount"
                  value={defaultAmount}
                  // defaultValue={defaultAmount}
                  min="1"
                  onChange={this.props.handleAmount}
                />
                
                {measure === "grams" &&
                  <div className="unit-text form-select">grams</div>
                }
                {measure === "liters" &&
                  <div className="unit-text form-select">liter/s</div>
                }
                {measure === "item" &&
                  <div className="unit-text form-select">{this.props.tempType}</div>
                }
              </div>

                {/* <select className="form-input form-select" name="select" value={this.props.tempSelect} onChange={this.props.handleSelect}>
                      <option value="200"> 🍔 hamburger (200 g) </option>
                      <option value="225"> 🥩 steak (225 g) </option>
                      <option value="1"> ⚖️ grams </option>
                </select> */}
              </div>
              {/* <div> */}
                <button 
                  className={impact} 
                  type="button" 
                  onClick={this.props.handleCalculation}>
                  CALCULATE IMPACT
                </button>
              {/* </div> */}

          </div>

          </div>
        </div>
      </form>
    );

  }

}


export default Form;