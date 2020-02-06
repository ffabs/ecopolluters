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
      measure: "grams",
      calculation: false,
      newCalculation: false,
      tempCategory: 'animal',
      tempType: 'beef',
      tempAmount: '23',
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
    // document.getElementById("form-impact-id").reset();
  }

  handleCalculation = event => {
    let unit = Data[this.state.tempCategory][this.state.tempType].unit;
    let measure = Data[this.state.tempCategory][this.state.tempType].measure;
    // const grams = this.state.tempAmount*this.state.tempSelect;
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

  handleCategory = event => {
    const tempCategory = event.target.value;
    // if (tempCategory !== this.state.category) {
    //   document.getElementById("form-impact-id").reset();
    // }
    switch(tempCategory) {
      case "animal":
        this.setState({
          tempCategory: 'animal',
          tempType: 'beef',
          tempAmount: 200,
          tempSelect: 1,
          newCalculation: true,
          tempAmount: Data[tempCategory].beef.defaultAmount
        });
      break;
      case "fruits":
        this.setState({
          tempCategory: 'fruits',
          tempType: 'tomatoes',
          tempAmount: 200,
          tempSelect: 1,
          newCalculation: true,
          tempAmount: Data[tempCategory].tomatoes.defaultAmount
        });
      break;
      case "grains":
        this.setState({
          tempCategory: 'grains',
          tempType: 'bread',
          tempAmount: 200,
          tempSelect: 1,
          newCalculation: true,
          tempAmount: Data[tempCategory].rice.defaultAmount
        });
      break;
      case "otherfood":
        this.setState({
          tempCategory: 'otherfood',
          tempType: 'soymilk',
          tempAmount: 200,
          tempSelect: 1,
          newCalculation: true,
          tempAmount: Data[tempCategory].soymilk.defaultAmount
        });
      break;
      // default:
      //   console.log ("null category");
      //   this.setState({
      //     newCalculation: true
      //   });
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