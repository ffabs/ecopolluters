import React, { Component } from 'react';
import Home from './pages/Home';
import Impact from './pages/Impact';
import Science from './pages/Science';
import About from './pages/About';
import Data from './impact-data.json';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import { hotjar } from 'react-hotjar';
 
hotjar.initialize(1604054);

class App extends Component {
  
  constructor (props) {
    super(props);   
    this.state = {
      unit: 1,
      measure: "item",
      calculation: false,
      newCalculation: false,
      tempCategory: 'animal',
      tempType: 'beef',
      tempAmount: '200',
      tempSelect: '1',
      category: '',
      type: '',
      amount: '',
      select: '',
      grams: '',
    };
  }

  handleAmount = event => {
    const tempAmount = event.target.value;
    this.setState({
      tempAmount: tempAmount,
      newCalculation: true
    });
  }

  handleSelect = event => {
    const tempSelect = event.target.value;
    this.setState({
      tempSelect: tempSelect,
      newCalculation: true
    });
  }

  handleType = event => {
    const tempType = event.target.value;
    let tempAmount = Data[this.state.tempCategory][tempType].defaultAmount;
    this.setState({
      tempType: tempType,
      tempAmount: tempAmount,
      newCalculation: true
    });
  }

  handleCalculation = event => {
    let unit = Data[this.state.tempCategory][this.state.tempType].unit;
    let measure = Data[this.state.tempCategory][this.state.tempType].measure;
    const grams = this.state.tempAmount*unit;
    const type = this.state.tempType;
    const category = this.state.tempCategory;
    this.setState({
      category: category,
      type: type,
      amount: this.state.tempAmount,
      select: this.state.tempSelect,
      grams: grams,
      calculation: true,
      newCalculation: false,
      unit: unit,
      measure: measure
    });
  }

  handleSolution = event => {
    const alternative = event.target.name;
    let category = Data[this.state.category][this.state.type][alternative].category;
    let type = Data[this.state.category][this.state.type][alternative].name;
    let alternativeUnit = Data[category][type].unit;
    let unit = Data[category][type].unit;
    let measure = Data[category][type].measure;
    let optimise = Data[this.state.category][this.state.type].optimise;
    let amount = 1;
    if(optimise === "CALORIES" || optimise === "PROTEINS" || optimise === "CARBS" || optimise === "FAT" ) {
      optimise = optimise.toLowerCase();
      let alternativeoptimise = Data[category][type]["nutritional values"][optimise];
      let currentnutrvaluetoaimat = ((this.state.grams * Data[this.state.category][this.state.type]["nutritional values"][optimise]).toFixed(0));
      amount = +(currentnutrvaluetoaimat / alternativeoptimise / alternativeUnit).toFixed(1);
    } else {
      amount = +(this.state.amount * this.state.unit * Data[this.state.category][this.state.type][alternative].amount / alternativeUnit).toFixed(1);
    }
    if(measure === "grams"){
      amount = amount.toFixed(0);
    }
    let grams = amount*unit;
    this.setState({
      category: category,
      type: type,
      amount: amount,
      tempCategory: category,
      tempType: type,
      tempAmount: amount,
      // select: this.state.tempSelect,
      grams: grams,
      calculation: true,
      newCalculation: false,
      // calculation: false,
      // newCalculation: true,
      unit: unit,
      measure: measure
    });
  }

  handleCategory = event => {
    const tempCategory = event.target.value;
    switch(tempCategory) {
      case "animal":
        this.setState({
          tempCategory: 'animal',
          tempType: 'beef',
          newCalculation: true,
          tempAmount: Data[tempCategory].beef.defaultAmount
        });
      break;
      case "fruits":
        this.setState({
          tempCategory: 'fruits',
          tempType: 'apples',
          newCalculation: true,
          tempAmount: Data[tempCategory].apples.defaultAmount
        });
      break;
      case "grains":
        this.setState({
          tempCategory: 'grains',
          tempType: 'bread',
          newCalculation: true,
          tempAmount: Data[tempCategory].bread.defaultAmount
        });
      break;
      case "otherfood":
        this.setState({
          tempCategory: 'otherfood',
          tempType: "rolls",
          newCalculation: true,
          tempAmount: Data[tempCategory]["rolls"].defaultAmount
        });
      break;
      default:
        console.log ("null category");
        this.setState({
          tempCategory: 'animal',
          tempType: 'beef',
          newCalculation: true,
          tempAmount: Data[tempCategory].beef.defaultAmount
        });
    }

  }



  render() {
    return (
      <HashRouter>
        <ScrollToTop>
          <Switch>
            <Route exact={true} path='/' render={() => (
              <Home 
                amount={this.state.amount}
                select={this.state.select}
                grams={this.state.grams}
                type={this.state.type}
                category={this.state.category}
                calculation={this.state.calculation}
                handleAmount={this.handleAmount}
                handleSelect={this.handleSelect}
                handleType={this.handleType}
                handleCalculation={this.handleCalculation}
                handleCategory={this.handleCategory}
              />
            )}/>
            <Route exact={true} path='/impact' render={() => (
              <Impact 
                amount={this.state.amount}
                select={this.state.select}
                grams={this.state.grams}
                unit={this.state.unit}
                measure={this.state.measure}
                type={this.state.type}
                category={this.state.category}
                tempCategory={this.state.tempCategory}
                tempType={this.state.tempType}
                tempAmount={this.state.tempAmount}
                tempSelect={this.state.tempSelect}
                calculation={this.state.calculation}
                newCalculation={this.state.newCalculation}
                handleAmount={this.handleAmount}
                handleSelect={this.handleSelect}
                handleType={this.handleType}
                handleCalculation={this.handleCalculation}
                handleCategory={this.handleCategory}
                handleSolution={this.handleSolution}
              />
            )}/>
            <Route exact={true} path='/science' render={() => (
              <Science />
            )}/>
            <Route exact={true} path='/about' render={() => (
              <About />
            )}/>
            <Route render={() => (
              <Redirect to="/" />
            )}/>
          </Switch>
        </ScrollToTop>
      </HashRouter>
    );
  }
}
export default App;